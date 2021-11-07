module Api
  module V1
    class FoldersController < ApplicationController
      before_action :authenticate_api_v1_user!, except: [:show]
      before_action :set_folder, except: %i[new create]
      before_action :correct_user?, only: %i[update destroy]

      def show
        render json: @folder, serializer: FolderSerializer
      end

      def create
        @folder = current_api_v1_user.folders.build(folder_params)
        if @folder.save
          render json: @folder, serializer: FolderSerializer
        else
          render json: { status: 'error', errors: @folder.errors }
        end
      end

      def update
        if @folder.update(folder_params)
          render json: @folder, serializer: FolderSerializer
        else
          render json: { status: 'error', errors: @folder.errors }
        end
      end

      def destroy
        if @folder.destroy
          render json: @folder, serializer: FolderSerializer
        else
          render json: { status: 'error', errors: @folder.errors }
        end
      end

      private

      def folder_params
        params.require(:folder).permit(:name, :public, :user_id)
      end

      def set_folder
        @folder = Folder.find(params[:id])
      end

      def correct_user?
        return if current_api_v1_user == @folder.user
        render json: { success: false,
                       errors: 'アクセスする権限がありません' }
      end

    end
  end
end
