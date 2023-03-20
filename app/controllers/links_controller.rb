class LinksController < ApplicationController

    before_action :set_link, only: [:destroy]

    def index
        render json: Link.all, status: :ok
    end

    def create
        new_link = Link.create!(link_params)
        render json: new_link, status: :created
    end

    def destroy

    end

    private

    def link_params
        params.permit(:link_name, :description, :link_url)
    end

    def set_link
        @link = Link.find(params[:id])
    end

end
