class TagsController < ApplicationController

    before_action :set_tag, only: [:update]
    
    def index
        render json: Tag.all, status: :ok
    end

    def create
        tag = Tag.create!(tag_params)
        render json: tag, status: :created
    end

    def update
        @tag.update(tag_params)
        render json: tag, status: :accepted

    private

    def tag_params
        params.permit(:tag_name)
    end

    def set_tag
        @tag = Tag.find(params[:id])
    end
    
end
