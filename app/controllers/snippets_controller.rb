class SnippetsController < ApplicationController

    before_action :set_snippet, only: [:update, :destroy]

    def index
        render json: Snippet.all, status: :ok
    end

    def create
        snippet = Snippet.create!(snippets_params)
        snippet.tags.find_or_create_by!(:tag_name => params[:tag_name])
        render json: snippet, status: :created
    end

    def update
        @snippet.update!(snippets_params)
        tag = Tag.find_by(id: params[:tag_id])
        tag.update!(tag_name: params[:tag_name])
        render json: @snippet, status: :accepted
    end

    def destroy
        @snippet.destroy
        head :no_content
    end

    private

    def snippets_params
        params.permit(:snippet_name, :description, :snippet, :is_starred, :language, :tags)
    end

    def set_snippet
        @snippet = Snippet.find(params[:id])
    end
end
