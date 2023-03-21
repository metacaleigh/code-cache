class NotesController < ApplicationController

    before_action :set_note, only: [:update, :destroy]

    def index
        render json: Note.all, status: :ok
    end
    
    def create
        note = Note.create!(note_params)
        render json: note, status: :created
    end

    def update
        @note.update!(note_params)
        render json: @note, status: :accepted
    end

    def destroy
        @note.destroy
        head :no_content
    end

    private

    def note_params
        params.permit(:note_name, :note, :is_starred)
    end 

    def set_note
        @note = Note.find(params[:id])
    end

end
