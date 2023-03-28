class NotesController < ApplicationController

    before_action :set_note, only: [:update, :destroy]

    def index
        render json: Note.all, status: :ok
    end
    
    def create
        note = Note.create!(note_params)
        note.tags.find_or_create_by!(:tag_name => params[:tag_name])
        render json: note, status: :created
    end

    def update
        @note.update!(note_params)
        tag = Tag.find_by(id: params[:tag_id])
        tag.update!(tag_name: params[:tag_name])
        render json: @note, status: :accepted
    end

    def destroy
        @note.destroy
        head :no_content
    end

    private

    def note_params
        params.permit(:note_name, :note, :is_starred, :tags)
    end 

    def set_note
        @note = Note.find(params[:id])
    end

end
