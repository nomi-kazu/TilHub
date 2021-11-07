module Api
  module V1
    class UsersController < ApplicationController

      def show
        @user = User.find_by(username: params[:username])
        render json: @user, serializer: UserSerializer
      end

    end
  end
end
