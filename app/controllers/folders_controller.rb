class FoldersController < ApplicationController
    
    before_action :set_folder, only: [:show]

    def index
        render json: @user.folders, status: :ok
    end

    def show
        render json: @folder.resources, status: :ok
    end

    def create
        folder = Folder.create!(folder_params)
        render json: folder, status: :created
    end

    private

    def folder_params
        params.permit(:name, :description, :image_url, :user_id)
    end

    def set_folder
        @folder = Folder.find(params[:id])
    end

end
