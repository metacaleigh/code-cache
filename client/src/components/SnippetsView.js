import React, { useState } from "react";
import SnippetCard from "./SnippetCard";
import EditSnippetForm from "./EditSnippetForm";
import NewSnippetForm from "./NewSnippetForm";

function SnippetsView({
  showSnippetEdit,
  setShowSnippetEdit,
  snippets,
  editClicked,
  onEditSnippetSubmit,
  onSnippetDelete,
  starFilterOn,
  showAddSnippet,
  setShowAddSnippet,
  folderId,
  onSnippetFormSubmit,
  onResourceCreation,
}) {
  const [snippetId, setSnippetId] = useState(null);
  const selectedSnippet = snippets?.find((snippet) => snippet.id === snippetId);

  const starredSnippets = snippets?.filter((snippet) => {
    if (snippet.is_starred === true) {
      return snippet;
    } else {
      return null;
    }
  });

  const snippetCards = snippets?.map((snippet) => {
    return (
      <SnippetCard
        key={snippet.id}
        {...snippet}
        editClicked={editClicked}
        setSnippetId={setSnippetId}
        showSnippetEdit={showSnippetEdit}
        setShowSnippetEdit={setShowSnippetEdit}
        onSnippetDelete={onSnippetDelete}
      />
    );
  });

  const starredSnippetCards = starredSnippets?.map((snippet) => {
    return (
      <SnippetCard
        key={snippet.id}
        {...snippet}
        editClicked={editClicked}
        setSnippetId={setSnippetId}
        showSnippetEdit={showSnippetEdit}
        setShowSnippetEdit={setShowSnippetEdit}
        onSnippetDelete={onSnippetDelete}
      />
    );
  });

  return (
    <>
      {showSnippetEdit && (
        <div className="flex flex-row justify-center">
          <EditSnippetForm
            snippet={selectedSnippet}
            onEditSnippetSubmit={onEditSnippetSubmit}
            onSnippetDelete={onSnippetDelete}
            showSnippetEdit={showSnippetEdit}
            setShowSnippetEdit={setShowSnippetEdit}
          />
        </div>
      )}
      {showAddSnippet && (
        <div className="flex flex-row justify-center">
          <NewSnippetForm
            folderId={folderId}
            onResourceCreation={onResourceCreation}
            onSnippetFormSubmit={onSnippetFormSubmit}
            showAddSnippet={showAddSnippet}
            setShowAddSnippet={setShowAddSnippet}
          />
        </div>
      )}
      <div className="flex flex-row flex-wrap justify-center gap-x-3 gap-y-3">
        {starFilterOn === true ? starredSnippetCards : snippetCards}
      </div>
    </>
  );
}

export default SnippetsView;
