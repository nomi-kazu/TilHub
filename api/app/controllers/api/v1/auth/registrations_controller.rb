module Api
  module V1
    module Auth
      class RegistrationsController < DeviseTokenAuth::RegistrationsController

        private

        # ストロングパラメーター設定
        def sign_up_params
          params.permit(:name, :email, :password, :password_confirmation)
        end

        def account_update_params
          params.permit(:name, :nickname, :image)
        end
      end
    end
  end
end
