import React, { useState } from "react";
import NoteCard from "./NoteCard";
import EditNoteForm from "./EditNoteForm";
import NewNoteForm from "./NewNoteForm";

function NotesView({
  editClicked,
  showNoteEdit,
  setShowNoteEdit,
  notes,
  onNoteDelete,
  onEditNoteSubmit,
  starFilterOn,
  folderId,
  onResourceCreation,
  onNoteFormSubmit,
  showAddNote,
  setShowAddNote
}) {
  const [noteId, setNoteId] = useState(null);
  const selectedNote = notes?.find((note) => note.id === noteId);

  const starredNotes = notes?.filter((note) => {
    if (note.is_starred === true) {
      return note;
    } else {
      return null;
    }
  });

  const noteCards = notes?.map((note) => {
    return (
      <NoteCard
        key={note.id}
        {...note}
        showNoteEdit={showNoteEdit}
        setShowNoteEdit={setShowNoteEdit}
        editClicked={editClicked}
        setNoteId={setNoteId}
        onNoteDelete={onNoteDelete}
      />
    );
  });

  const starredNoteCards = starredNotes?.map((note) => {
    return (
      <NoteCard
        key={note.id}
        {...note}
        showNoteEdit={showNoteEdit}
        setShowNoteEdit={setShowNoteEdit}
        editClicked={editClicked}
        setNoteId={setNoteId}
        onNoteDelete={onNoteDelete}
      />
    );
  });

  return (
    <>
      {showNoteEdit && (
        <div className="flex flex-row justify-center">
          <EditNoteForm
            note={selectedNote}
            onEditNoteSubmit={onEditNoteSubmit}
            onNoteDelete={onNoteDelete}
            showNoteEdit={showNoteEdit}
            setShowNoteEdit={setShowNoteEdit}
          />
        </div>
      )}
      {showAddNote &&
        <div className="flex flex-row justify-center">
        <NewNoteForm
          showAddNote={showAddNote}
          setShowAddNote={setShowAddNote}
          folderId={folderId}
          onResourceCreation={onResourceCreation}
          onNoteFormSubmit={onNoteFormSubmit}
        />
      </div>
      }
      <div className="flex flex-row flex-wrap justify-center gap-3">
        {starFilterOn === true ? starredNoteCards : noteCards}
      </div>
    </>
  );
}

export default NotesView;
