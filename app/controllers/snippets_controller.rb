class SnippetsController < ApplicationController

    def index
        render json: Snippet.all, status: :ok
    end

    def create
        snippet = Snippet.create!(snippets_params)
        render json: snippet, status: :created
    end

    private

    def snippets_params
        params.permit(:snippet_name, :description, :snippet)
    end
end
