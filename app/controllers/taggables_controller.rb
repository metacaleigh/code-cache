class TaggablesController < ApplicationController

    before_action :set_taggable, only: [:update, :destroy]

    def index
        render json: Taggable.all, status: :ok
    end

    def create
        taggable = Taggable.create!(taggable_params)
        render json: taggable, status: :created
    end

    def update
        @taggable.update(taggable_params)
        render json: taggable, status: :accepted
    end

    def destroy
        @taggable.destroy
        head :no_content
    end

    private

    def taggable_params
        params.permit(:taggable_id, :taggable_type, :tag_id)
    end

    def set_taggable
        @taggable = Taggable.find(params[:id])
    end
    
end
