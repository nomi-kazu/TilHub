module Api
  module V1
    module Auth
      class OmniauthCallbacksController < DeviseTokenAuth::OmniauthCallbacksController
        include Devise::Controllers::Rememberable

      end
    end
  end
end
