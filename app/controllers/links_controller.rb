class LinksController < ApplicationController

    before_action :set_link, only: [:show, :update, :destroy]

    def index
        render json: Link.all, status: :ok
    end

    def show
        render json: @link, status: :ok
    end

    def create
        new_link = Link.create!(link_params)
        render json: new_link, status: :created
    end

    def update
        @link.update!(link_params)
        render json: @link, status: :accepted
    end

    def destroy
        @link.destroy
        head :no_content
    end

    private

    def link_params
        params.permit(:link_name, :description, :link_url, :is_starred)
    end

    def set_link
        @link = Link.find(params[:id])
    end

end
