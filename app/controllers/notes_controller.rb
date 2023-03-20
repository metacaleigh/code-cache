class NotesController < ApplicationController

    def index
        render json: Note.all, status: :ok
    end
    
    def create
        note = Note.create!(note_params)
        render json: note, status: :created
    end

    private

    def note_params
        params.permit(:note_name, :note)
    end 


end
