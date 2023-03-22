import React, { useState, useEffect } from 'react';
import { useParams, NavLink, Route, Switch, useLocation, useRouteMatch, useHistory} from "react-router-dom";
import ResourcesNavBar from './ResourcesNavBar';
import ResourcesList from './ResourcesList';
import Loading from './Loading';
import NewLinkForm from './NewLinkForm';
import NewNoteForm from './NewNoteForm';
import NewSnippetForm from './NewSnippetForm';

function ResourcesPage({}) {

    const location = useLocation()
    const {id} = useParams();
    // console.log(id);
    const history = useHistory()
    const [folderContent, setFolderContent] = useState({})
    const match = useRouteMatch()
    const [editClicked, setEditClicked] = useState(false);
    const [showLinkEdit, setShowLinkEdit] = useState(false);
    const [showNoteEdit, setShowNoteEdit] = useState(false);
    const [showSnippetEdit, setShowSnippetEdit] = useState(false);
    const [search, setSearch] = useState("");
    const [starFilterOn, setStarFilterOn] = useState(false);
    const [tagsClicked, setTagsClicked] = useState(false);
    const [showAddTag, setShowAddTag] = useState(false);
    // let folderId = folderContent.id
    // console.log(folderId)

    useEffect(() => {
      fetch(`/folders/${id}`)
      .then(r => r.json())
      .then(f => {
        setFolderContent(f)
        // console.log("USE EFFECT", f)
      })
    }, [location, starFilterOn])

    // console.log(folderContent);

    function onLinkFormSubmit(newLink) {
      setFolderContent({...folderContent, links: [...folderContent.links, newLink]})
    }

    function onSnippetFormSubmit(newSnippet) {
      setFolderContent({...folderContent, snippets: [...folderContent.snippets, newSnippet]})
    }
  
    function onNoteFormSubmit(newNote) {
      setFolderContent({...folderContent, notes: [...folderContent.notes, newNote]})
    }
  
    function onResourceCreation(newResource) {
      setFolderContent({...folderContent, resources: [...folderContent.resources, newResource]})
      history.push(`/folders/${id}`)
    }

    function onEditLinkSubmit(id, editedLink) {
      fetch(`/links/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editedLink)
      })
      .then(r => r.json())
      .then((newLink) => {
        setFolderContent({...folderContent, links: folderContent.links.map((link) => {
          if (link.id === newLink.id) {
            return newLink
          } else {
            return link
          }
        })})
      })
      setShowLinkEdit(!showLinkEdit)
    }

    function onEditNoteSubmit(id, editedNote) {
      fetch(`/notes/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editedNote)
      })
      .then(r => r.json())
      .then((newNote) => {
        setFolderContent({...folderContent, notes: folderContent.notes.map((note) => {
          if (note.id === newNote.id) {
            return newNote
          } else {
            return note
          }
        })})
      })
      setShowNoteEdit(!showNoteEdit)
    }

    function onEditSnippetSubmit(id, editedSnippet) {
      fetch(`/snippets/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editedSnippet)
      })
      .then(r => r.json())
      .then((newSnippet) => {
        setFolderContent({...folderContent, snippets: folderContent.snippets.map((snippet) => {
          if (snippet.id === newSnippet.id) {
            return newSnippet
          } else {
            return snippet
          }
        })})
      })
      setShowSnippetEdit(!showSnippetEdit)
    }

  // function onUnstar(id) {
  //   fetch(`/links/${id}`, {
  //     method: "PATCH",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ is_starred: false }),
  //   })
  //   .then((unstar) => {
  //     setFolderContent({...folderContent, links: folderContent.links.map((link) => {
  //       if (link.id === unstar.id) {
  //         return unstar
  //       } else {
  //         return link
  //       }
  //     })})
  //   })
  // }

  // function onStar(id) {
  //   fetch(`/links/${id}`, {
  //     method: "PATCH",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ is_starred: true }),
  //   })
  //   .then((star) => {
  //     setFolderContent({...folderContent, links: folderContent.links.map((link) => {
  //       if (link.id === star.id) {
  //         return star
  //       } else {
  //         return link
  //       }
  //     })})
  //   })
  // }

    function onLinkDelete(id) {

      const filteredLinks = folderContent.links.filter(l => l.id !== id)
  
      fetch(`/links/${id}`, {
        method: 'DELETE'
      })
      .then(setFolderContent({...folderContent, links: filteredLinks}))
    }

    function onNoteDelete(id) {

      const filteredNotes = folderContent.notes.filter(n => n.id !== id)
  
      fetch(`/notes/${id}`, {
        method: 'DELETE'
      })
      .then(setFolderContent({...folderContent, notes: filteredNotes}))
    }

    function onSnippetDelete(id) {

      const filteredSnippets = folderContent.snippets.filter(s => s.id !== id)
  
      fetch(`/snippets/${id}`, {
        method: 'DELETE'
      })
      .then(setFolderContent({...folderContent, snippets: filteredSnippets}))
    }
    
    if (!folderContent) {
      return <Loading />
    } else {
    return(
        <>
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
                <ResourcesNavBar editClicked={editClicked} setEditClicked={setEditClicked} folderId={id} search={search} setSearch={setSearch} starFilterOn={starFilterOn} setStarFilterOn={setStarFilterOn} tagsClicked={tagsClicked} setTagsClicked={setTagsClicked}/>
                <ResourcesList folderContent={folderContent} editClicked={editClicked} onLinkDelete={onLinkDelete} onEditLinkSubmit={onEditLinkSubmit} showLinkEdit={showLinkEdit} setShowLinkEdit={setShowLinkEdit} showNoteEdit={showNoteEdit} setShowNoteEdit={setShowNoteEdit} onNoteDelete={onNoteDelete} onEditNoteSubmit={onEditNoteSubmit} showSnippetEdit={showSnippetEdit} setShowSnippetEdit={setShowSnippetEdit} onEditSnippetSubmit={onEditSnippetSubmit} onSnippetDelete={onSnippetDelete} search={search} starFilterOn={starFilterOn} tagsClicked={tagsClicked}/>
            </>
            }
              </Route>
            </Switch>
        </>
    )
          }
}

export default ResourcesPage;