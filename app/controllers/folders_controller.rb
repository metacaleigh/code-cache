class FoldersController < ApplicationController

    def index
        render json: Folder.all, status: :ok
    end

    def create
        folder = Folder.create!(folder_params)
        render json: folder, status: :created
    end

    private

    def folder_params
        params.permit(:name, :description, :image_url, :user_id)
    end

end
