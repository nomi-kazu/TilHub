module Api
  module V1
    module Auth
      class TokenValidationsController < DeviseTokenAuth::TokenValidationsController 

        def render_validate_token_success
          render json: @resource, serializer: UserSerializer
        end 

      end
    end
  end
end
