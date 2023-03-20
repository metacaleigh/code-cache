class ResourcesController < ApplicationController

    def index
        render json: Resource.all, status: :ok
    end

    def create
        resource = Resource.create!(resources_params)
        render json: resource, status: :created
    end

    private

    def resources_params
        params.permit(:folder_id, :resourceable_id, :resourceable_type)
    end
end
