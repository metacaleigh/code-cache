class SnippetsController < ApplicationController

    before_action :set_snippet, only: [:update, :destroy]

    def index
        render json: Snippet.all, status: :ok
    end

    def create
        snippet = Snippet.create!(snippets_params)
        render json: snippet, status: :created
    end

    def update
        @snippet.update!(snippets_params)
        render json: @snippet, status: :accepted
    end

    def destroy
        @snippet.destroy
        head :no_content
    end

    private

    def snippets_params
        params.permit(:snippet_name, :description, :snippet, :is_starred)
    end

    def set_snippet
        @snippet = Snippet.find(params[:id])
    end
end
