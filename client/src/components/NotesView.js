import React, { useState } from 'react';
import NoteCard from './NoteCard';
import EditNoteForm from './EditNoteForm';

function NotesView({ editClicked, showNoteEdit, setShowNoteEdit, notes, onNoteDelete, onEditNoteSubmit }){

    const [noteId, setNoteId] = useState(null)
    const selectedNote = notes?.find(note => note.id === noteId)

    const noteCards = notes?.map((note) => {
        return <NoteCard key={note.id} {...note} showNoteEdit={showNoteEdit} setShowNoteEdit={setShowNoteEdit} editClicked={editClicked} setNoteId={setNoteId} onNoteDelete={onNoteDelete}/>
    })
    
    return(
        <>
        { showNoteEdit && 
            <EditNoteForm note={selectedNote} onEditNoteSubmit={onEditNoteSubmit}/>
        }
            <div className="flex flex-row flex-wrap justify-start mx-5 gap-5">
                {noteCards}
            </div>
        </>
    )
}

export default NotesView;