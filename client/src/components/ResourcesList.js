import React, { useState, useEffect } from "react";
import LinksView from "./LinksView";
import SnippetsView from "./SnippetsView";
import NotesView from "./NotesView";
import {
  Route,
  useRouteMatch,
  NavLink,
  useLocation,
  useParams,
  Switch,
} from "react-router-dom";
import Loading from "./Loading";

function ResourcesList({
  search,
  onSnippetDelete,
  onEditSnippetSubmit,
  showSnippetEdit,
  setShowSnippetEdit,
  onEditNoteSubmit,
  onNoteDelete,
  showNoteEdit,
  setShowNoteEdit,
  setShowLinkEdit,
  showLinkEdit,
  onLinkDelete,
  editClicked,
  onEditLinkSubmit,
  starFilterOn,
  folderContent: { id, name, links, notes, snippets },
}) {
  const location = useLocation();
  // console.log(location);
  // const {id} = useParams()
  // console.log(id);
  const match = useRouteMatch();
  const [tabClicked, setTabClicked] = useState(false);

  const filteredLinks = links?.filter((link) => {
    return link.link_name.toLowerCase().includes(search.toLowerCase());
  });

  const filteredSnippets = snippets?.filter((snippet) => {
    return snippet.snippet_name.toLowerCase().includes(search.toLowerCase());
  });

  const filteredNotes = notes?.filter((note) => {
    return note.note_name.toLowerCase().includes(search.toLowerCase());
  });

  // if (!id) return <Loading/>
  return (
    <>
      <div className="flex flex-wrap w-full mb-8 flex-col items-center text-center">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mt-3 mb-2 text-gray-900">
          {name} Folder
        </h1>
      </div>
      <div className="tabs justify-center mb-10">
        <NavLink to={`/folders/${id}/links`}>
          {location.pathname === `/folders/${id}/links` ? (
            <a className="tab tab-lg tab-lifted tab-active">Links</a>
          ) : (
            <a className="tab tab-lg tab-lifted">Links</a>
          )}
        </NavLink>
        <NavLink to={`/folders/${id}/snippets`}>
          {location.pathname === `/folders/${id}/snippets` ? (
            <a className="tab tab-lg tab-lifted tab-active">Code Snippets</a>
          ) : (
            <a className="tab tab-lg tab-lifted">Code Snippets</a>
          )}
        </NavLink>
        <NavLink to={`/folders/${id}/notes`}>
          {location.pathname === `/folders/${id}/notes` ? (
            <a className="tab tab-lg tab-lifted tab-active">Notes</a>
          ) : (
            <a className="tab tab-lg tab-lifted">Notes</a>
          )}
        </NavLink>
      </div>
      {/* <!-- Page content here --> */}
      <Switch>
        <Route exact path={`${match.url}/links`}>
          <LinksView
            starFilterOn={starFilterOn}
            links={filteredLinks}
            editClicked={editClicked}
            onLinkDelete={onLinkDelete}
            onEditLinkSubmit={onEditLinkSubmit}
            showLinkEdit={showLinkEdit}
            setShowLinkEdit={setShowLinkEdit}
          />
        </Route>
        <Route exact path={`${match.url}`}>
          <LinksView
            starFilterOn={starFilterOn}
            links={filteredLinks}
            editClicked={editClicked}
            onLinkDelete={onLinkDelete}
            onEditLinkSubmit={onEditLinkSubmit}
            showLinkEdit={showLinkEdit}
            setShowLinkEdit={setShowLinkEdit}
          />
        </Route>
        <Route exact path={`${match.url}/snippets`}>
          <SnippetsView
            snippets={filteredSnippets}
            editClicked={editClicked}
            showSnippetEdit={showSnippetEdit}
            setShowSnippetEdit={setShowSnippetEdit}
            onEditSnippetSubmit={onEditSnippetSubmit}
            onSnippetDelete={onSnippetDelete}
            starFilterOn={starFilterOn}
          />
        </Route>
        <Route exact path={`${match.url}/notes`}>
          <NotesView
            notes={filteredNotes}
            editClicked={editClicked}
            showNoteEdit={showNoteEdit}
            setShowNoteEdit={setShowNoteEdit}
            onNoteDelete={onNoteDelete}
            onEditNoteSubmit={onEditNoteSubmit}
            starFilterOn={starFilterOn}
          />
        </Route>
      </Switch>
    </>
  );
}

export default ResourcesList;
