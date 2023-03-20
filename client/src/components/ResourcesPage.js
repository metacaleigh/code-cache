import React, { useState, useEffect } from 'react';
import { useParams, NavLink, Route, Switch, useRouteMatch } from "react-router-dom";
import ResourcesNavBar from './ResourcesNavBar';
import ResourcesList from './ResourcesList';
import Loading from './Loading';
import NewLinkForm from './NewLinkForm';
import NewNoteForm from './NewNoteForm';
import NewSnippetForm from './NewSnippetForm';

function ResourcesPage({  onLinkFormSubmit, onNoteFormSubmit, onResourceCreation, onSnippetFormSubmit, onLinkDelete }) {

    const {id} = useParams();
    console.log(id);
    const [folderContent, setFolderContent] = useState({})
    const match = useRouteMatch()
    const [editClicked, setEditClicked] = useState(false);
    // const [links, setLinks] = useState([])
    // const [notes, setNotes] = useState([])
    // const [snippets, setSnippets] = useState([])

    useEffect(() => {
      fetch(`/folders/${id}`)
      .then(r => r.json())
      .then(f => {
        setFolderContent(f)
      })
    }, [])

    console.log(folderContent);
    
    if (!folderContent) {
      return <Loading />
    } else {
    return(
        <>
            <ResourcesNavBar editClicked={editClicked} setEditClicked={setEditClicked}/>
            <Switch>
                <Route path={`${match.url}/new-link`}>
                  <NewLinkForm onLinkFormSubmit={onLinkFormSubmit} folderId={id} 
                   onResourceCreation={onResourceCreation}
                  />
                </Route>
                <Route path={`${match.url}/new-note`}>
                  <NewNoteForm onNoteFormSubmit={onNoteFormSubmit} onResourceCreation={onResourceCreation} folderId={id}/>
                </Route>
                <Route path={`${match.url}/new-snippet`}>
                  <NewSnippetForm onSnippetFormSubmit={onSnippetFormSubmit} folderId={id} onResourceCreation={onResourceCreation}/>
                </Route>
                <Route path={`${match.url}`}>
            {folderContent.resources?.length === 0 ? 
                <div className="hero min-h-screen bg-base-100">
            <div className="hero-content text-center">
              <div className="max-w-md">
                <h1 className="text-5xl font-bold py-6">Hmm, it looks a little empty in here...</h1>
                <NavLink to={`/folders/${id}/new-link`}>
                <button className="btn btn-primary mx-1">Add a Link</button>
                </NavLink>
                <NavLink to={`/folders/${id}/new-snippet`}>
                <button className="btn btn-secondary mx-1">Add a Code Snippet</button>
                </NavLink>
                <NavLink to={`/folders/${id}/new-note`}>
                <button className="btn btn-accent mx-1">Add a Note</button>
                </NavLink>
              </div>
            </div>
          </div>
            :
            <>
                <ResourcesList folderContent={folderContent} editClicked={editClicked} onLinkDelete={onLinkDelete}/>
            </>
            }
              </Route>
            </Switch>
        </>
    )
          }
}

export default ResourcesPage;