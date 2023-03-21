class FoldersController < ApplicationController
    
    before_action :set_folder, only: [:show, :update, :destroy]

    def index
        render json: @user.folders, status: :ok
    end

    def show
        render json: @folder, status: :ok
    end

    def get_links
        render json: @folder.links, status: :ok
    end

    def create
        folder = Folder.create!(folder_params)
        render json: folder, status: :created
    end

    def update
        @folder.update!(folder_params)
        render json: @folder, status: :accepted
    end

    def destroy
        @folder.destroy
        head :no_content
    end

    private

    def folder_params
        params.permit(:name, :description, :user_id, :folder_color)
    end

    def set_folder
        Folder.uncached do
            @folder = Folder.find(params[:id])
        end
    end

end
