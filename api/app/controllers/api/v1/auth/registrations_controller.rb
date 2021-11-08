module Api
  module V1
    module Auth
      class RegistrationsController < DeviseTokenAuth::RegistrationsController
        before_action :authenticate_api_v1_user!, except: %i[create new]

        def edit
          render json: current_api_v1_user, serializer: UserSerializer
        end

        def update
          if params[:avatar]
            image_match = params[:avatar].match(/^data:(.*?);(?:.*?),(.*)$/)
            mime_type, encoded_image = image_match.captures
            extension = mime_type.split('/').second
            decoded_image = Base64.decode64(encoded_image)
            filename = "avatar#{current_api_v1_user.id}.#{extension}"
            image_path = "#{Rails.root}/#{filename}"
            File.open(image_path, 'wb') do |f|
              f.write(decoded_image)
            end
            current_api_v1_user.avatar.attach({ io: File.open(image_path), filename: filename, content_type: mime_type })
          end
          super
        end

        private

        # ストロングパラメーター設定
        def sign_up_params
          params.permit(:email, :password, :username).merge(username: default_username)
        end

        def account_update_params
          params.permit(:name, :username, :image, :profile, :address, :avatar)
        end

        def render_create_success
          render json: @resource, serializer: UserSerializer
        end

        def render_update_success
          render json: @resource, serializer: UserSerializer
        end

        def default_username
          SecureRandom.alphanumeric(15)
        end
      end
    end
  end
end
