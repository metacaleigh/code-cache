import React, { useState, useEffect } from "react";
import {
  useParams,
  NavLink,
  Route,
  Switch,
  useLocation,
  useRouteMatch,
  useHistory,
} from "react-router-dom";
import ResourcesNavBar from "./ResourcesNavBar";
import ResourcesList from "./ResourcesList";
import Loading from "./Loading";
import NewLinkForm from "./NewLinkForm";
import NewNoteForm from "./NewNoteForm";
import NewSnippetForm from "./NewSnippetForm";

function ResourcesPage({}) {
  const location = useLocation();
  const { id } = useParams();
  // console.log(id);
  const history = useHistory();
  const [folderContent, setFolderContent] = useState({});
  const match = useRouteMatch();
  const [editClicked, setEditClicked] = useState(false);
  const [showLinkEdit, setShowLinkEdit] = useState(false);
  const [showNoteEdit, setShowNoteEdit] = useState(false);
  const [showSnippetEdit, setShowSnippetEdit] = useState(false);
  const [search, setSearch] = useState("");
  const [starFilterOn, setStarFilterOn] = useState(false);
  const [tagsClicked, setTagsClicked] = useState(false);
  const [showAddTag, setShowAddTag] = useState(false);
  const [showAddLink, setShowAddLink] = useState(false);
  const [showAddNote, setShowAddNote] = useState(false);
  const [showAddSnippet, setShowAddSnippet] = useState(false);
  // let folderId = folderContent.id
  // console.log(folderId)

  useEffect(() => {
    fetch(`/folders/${id}`)
      .then((r) => r.json())
      .then((f) => {
        setFolderContent(f);
        // console.log("USE EFFECT", f)
      });
  }, [location, starFilterOn]);

  // console.log(folderContent);

  function onLinkFormSubmit(newLink) {
    setFolderContent({
      ...folderContent,
      links: [...folderContent.links, newLink],
    });
    // history.push(`/folders/${id}/links`)
  }

  function onSnippetFormSubmit(newSnippet) {
    setFolderContent({
      ...folderContent,
      snippets: [...folderContent.snippets, newSnippet],
    });
    // history.push(`/folders/${id}/snippets`)
  }

  function onNoteFormSubmit(newNote) {
    setFolderContent({
      ...folderContent,
      notes: [...folderContent.notes, newNote],
    });
    // history.push(`/folders/${id}/notes`)
  }

  function onResourceCreation(newResource) {
    setFolderContent({
      ...folderContent,
      resources: [...folderContent.resources, newResource],
    });

    if (newResource.resourceable_type === "Link") {
     return history.push(`/folders/${id}/links`);
    } else if (newResource.resourceable_type === "Snippet") {
      return history.push(`/folders/${id}/snippets`);
    } else if (newResource.resourceable_type === "Note") {
      return history.push(`/folders/${id}/notes`);
    } else {
      return history.push(`/folders/${id}`);
    }
  }

  function onEditLinkSubmit(id, editedLink) {
    fetch(`/links/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedLink),
    })
      .then((r) => r.json())
      .then((newLink) => {
        setFolderContent({
          ...folderContent,
          links: folderContent.links.map((link) => {
            if (link.id === newLink.id) {
              return newLink;
            } else {
              return link;
            }
          }),
        });
      });
    setShowLinkEdit(!showLinkEdit);
    setEditClicked(!editClicked);
  }

  function onEditNoteSubmit(id, editedNote) {
    fetch(`/notes/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedNote),
    })
      .then((r) => r.json())
      .then((newNote) => {
        setFolderContent({
          ...folderContent,
          notes: folderContent.notes.map((note) => {
            if (note.id === newNote.id) {
              return newNote;
            } else {
              return note;
            }
          }),
        });
      });
    setShowNoteEdit(!showNoteEdit);
    setEditClicked(!editClicked);
  }

  function onEditSnippetSubmit(id, editedSnippet, lang) {
    fetch(`/snippets/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({...editedSnippet, language: lang}),
    })
      .then((r) => r.json())
      .then((newSnippet) => {
        setFolderContent({
          ...folderContent,
          snippets: folderContent.snippets.map((snippet) => {
            if (snippet.id === newSnippet.id) {
              return newSnippet;
            } else {
              return snippet;
            }
          }),
        });
      });
    setShowSnippetEdit(!showSnippetEdit);
    setEditClicked(!editClicked);
  }

  function onLinkDelete(id) {
    setShowLinkEdit(!showLinkEdit);
    setEditClicked(!editClicked);

    const filteredLinks = folderContent.links.filter((l) => l.id !== id);

    fetch(`/links/${id}`, {
      method: "DELETE",
    }).then(setFolderContent({ ...folderContent, links: filteredLinks }));
  }

  function onNoteDelete(id) {
    setShowNoteEdit(!showNoteEdit);
    setEditClicked(!editClicked);

    const filteredNotes = folderContent.notes.filter((n) => n.id !== id);

    fetch(`/notes/${id}`, {
      method: "DELETE",
    }).then(setFolderContent({ ...folderContent, notes: filteredNotes }));
  }

  function onSnippetDelete(id) {
    setShowSnippetEdit(!showSnippetEdit);
    setEditClicked(!editClicked);

    const filteredSnippets = folderContent.snippets.filter((s) => s.id !== id);

    fetch(`/snippets/${id}`, {
      method: "DELETE",
    }).then(setFolderContent({ ...folderContent, snippets: filteredSnippets }));
  }
  // console.log("!!!", folderContent?.resources?.length)

  if (!folderContent) {
    return <Loading />;
  } else {
    return (
      <>
        {folderContent?.resources?.length === 0 ? (
          <div className="hero min-h-screen bg-base-100">
            <div className="hero-content text-center">
              <div className="max-w-md">
                {showAddLink || showAddNote || showAddSnippet === true
                ? null : (
                  <div>
                    <h1 className="text-5xl font-bold py-6">
                      Hmm, it looks a little empty in here...
                    </h1>
                    <button
                      onClick={() => setShowAddLink(!showAddLink)}
                      className="btn btn-primary mx-1"
                    >
                      Add a Link
                    </button>
                    <button
                      onClick={() => setShowAddSnippet(!showAddSnippet)}
                      className="btn btn-secondary mx-1"
                    >
                      Add a Code Snippet
                    </button>
                    <button
                      onClick={() => setShowAddNote(!showAddNote)}
                      className="btn btn-accent mx-1"
                    >
                      Add a Note
                    </button>
                  </div>
                )}
                {showAddLink && (
                  <div>
                    <NewLinkForm
                      folderId={id}
                      onResourceCreation={onResourceCreation}
                      onLinkFormSubmit={onLinkFormSubmit}
                      showAddLink={showAddLink}
                      setShowAddLink={setShowAddLink}
                    />
                  </div>
                )}
                {showAddNote && (
                  <div>
                    <NewNoteForm
                      folderId={id}
                      onResourceCreation={onResourceCreation}
                      onNoteFormSubmit={onNoteFormSubmit}
                      showAddNote={showAddNote}
                      setShowAddNote={setShowAddNote}
                    />
                  </div>
                )}
                {showAddSnippet && (
                  <div>
                    <NewSnippetForm
                      folderId={id}
                      onResourceCreation={onResourceCreation}
                      onSnippetFormSubmit={onSnippetFormSubmit}
                      showAddSnippet={showAddSnippet}
                      setShowAddSnippet={setShowAddSnippet}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <>
            <ResourcesNavBar
              editClicked={editClicked}
              setEditClicked={setEditClicked}
              folderId={id}
              search={search}
              setSearch={setSearch}
              starFilterOn={starFilterOn}
              setStarFilterOn={setStarFilterOn}
              tagsClicked={tagsClicked}
              setTagsClicked={setTagsClicked}
              showAddLink={showAddLink}
              setShowAddLink={setShowAddLink}
              showAddNote={showAddNote}
              setShowAddNote={setShowAddNote}
              showAddSnippet={showAddSnippet}
              setShowAddSnippet={setShowAddSnippet}
            />
            <ResourcesList
              folderContent={folderContent}
              editClicked={editClicked}
              onLinkDelete={onLinkDelete}
              onEditLinkSubmit={onEditLinkSubmit}
              showLinkEdit={showLinkEdit}
              setShowLinkEdit={setShowLinkEdit}
              showNoteEdit={showNoteEdit}
              setShowNoteEdit={setShowNoteEdit}
              onNoteDelete={onNoteDelete}
              onEditNoteSubmit={onEditNoteSubmit}
              showSnippetEdit={showSnippetEdit}
              setShowSnippetEdit={setShowSnippetEdit}
              onEditSnippetSubmit={onEditSnippetSubmit}
              onSnippetDelete={onSnippetDelete}
              search={search}
              starFilterOn={starFilterOn}
              tagsClicked={tagsClicked}
              showAddLink={showAddLink}
              setShowAddLink={setShowAddLink}
              showAddNote={showAddNote}
              setShowAddNote={setShowAddNote}
              showAddSnippet={showAddSnippet}
              setShowAddSnippet={setShowAddSnippet}
              onLinkFormSubmit={onLinkFormSubmit}
              folderId={id}
              onResourceCreation={onResourceCreation}
              onNoteFormSubmit={onNoteFormSubmit}
              onSnippetFormSubmit={onSnippetFormSubmit}
            />
          </>
        )}
      </>
    );
  }
}

export default ResourcesPage;
