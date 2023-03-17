import React, { useState, useEffect } from 'react';
import { useParams, NavLink, Route, Switch } from "react-router-dom";
import ResourcesNavBar from './ResourcesNavBar';
import ResourcesList from './ResourcesList';
import Loading from './Loading';
import NewLinkForm from './NewLinkForm';
import NewNoteForm from './NewNoteForm';
import NewSnippetForm from './NewSnippetForm';

function ResourcesPage() {

    const {id} = useParams();
    console.log(id);
    const [folderContent, setFolderContent] = useState({})
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
    
    if (!folderContent) return <Loading />
    return(
        <>
            <ResourcesNavBar/>
            {folderContent.resources?.length === 0 ? 
                <div className="hero min-h-screen bg-base-100">
            <div className="hero-content text-center">
              <div className="max-w-md">
                <h1 className="text-5xl font-bold py-6">Hmm, it looks a little empty in here...</h1>
                <NavLink to="/new-link">
                <button className="btn btn-primary mx-1">Add a Link</button>
                </NavLink>
                <NavLink to="/new-snippet">
                <button className="btn btn-secondary mx-1">Add a Code Snippet</button>
                </NavLink>
                <NavLink to="/new-note">
                <button className="btn btn-accent mx-1">Add a Note</button>
                </NavLink>
              </div>
            </div>
          </div>
            :
            <>
                <ResourcesList folderContent={folderContent}/>
            </>
            }
                <Switch>
                <Route path="/new-link">
                  <NewLinkForm />
                </Route>
                <Route path="/new-note">
                  <NewNoteForm />
                </Route>
                <Route path="/new-snippet">
                  <NewSnippetForm />
                </Route>
                </Switch>
        </>
    )
}

export default ResourcesPage;