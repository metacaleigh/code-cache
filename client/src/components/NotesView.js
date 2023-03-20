import React from 'react';
import NoteCard from './NoteCard';

function NotesView({ notes }){

    const noteCards = notes?.map((note) => {
        return <NoteCard key={note.id} {...note}/>
    })
    
    return(
        <>
            <div className="flex flex-row flex-wrap justify-around">
                {noteCards}
            </div>
        </>
    )
}

export default NotesView;