class BlogsController < ApplicationController

    before_action :set_blog, only: [:show]
    
    def index
        render json: Blog.all, status: :ok
    end

    def show
        render json: @blog, status: :ok
    end

    private

    def set_blog
        @blog = Blog.find(params[:id])
        render json: @blog, status: :ok
    end
end
