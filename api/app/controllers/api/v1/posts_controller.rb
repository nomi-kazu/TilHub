module Api
  module V1
    class PostsController < ApplicationController
      before_action :authenticate_api_v1_user!, except: [:show]
      before_action :set_post, only: %i[show edit update]

      def show
        render json: @post, serializer: PostSerializer
      end

      def new
        @post = Post.new
        render json: @post, serializer: PostSerializer
      end

      def create
        @post = current_api_v1_user.posts.build(post_params)
        if @post.save!
          render json: @post, serializer: PostSerializer
        end
      end

      def edit
        render json: @post, serializer: PostSerializer
      end

      def update
        if @post.update(post_params)
          render json: @post, serializer: PostSerializer
        end
      end

      def destroy
      end

      private

      def post_params
        params.require(:post).permit(:name, :content, :public)
      end

      def set_post
        @post = Post.find(params[:id])
      end

    end
  end
end