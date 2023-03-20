import '../index.css';
import react, { useState, useEffect, useContext } from "react";
import { UserContext } from '../context/user';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LandingPage from './LandingPage';
import MainNavBar from './MainNavBar';
import FoldersPage from "./FoldersPage";
import NewFolderForm from "./NewFolderForm";
import ResourcesPage from "./ResourcesPage";
import EditFolderForm from './EditFolderForm';
import EditLinkForm from './EditLinkForm';

function App() {

  const [user, setUser] = useContext(UserContext)
  const [folders, setFolders] = useState([])
  const [errors, setErrors] = useState([])
  const [links, setLinks] = useState([])
  const [resources, setResources] = useState([])
  const [snippets, setSnippets] = useState([])
  const [notes, setNotes] = useState([])

  useEffect(() => {
    fetch("/me").then((r) => {
      if(r.ok) {
        r.json().then((user) => setUser(user))
      }
    })

    fetch("/folders")
      .then((r) => (r.json()))
      .then((folders) => setFolders(folders))

    fetch("/links")
      .then((r) => (r.json()))
      .then((links) => setLinks(links))

    fetch("/snippets")
      .then((r) => (r.json()))
      .then((snippets) => setSnippets(snippets))

    fetch("/notes")
    .then((r) => (r.json()))
    .then((notes) => setNotes(notes))

    fetch("/resources")
      .then((r) => (r.json()))
      .then((resources) => setResources(resources))
  }, [])
  // console.log(folders)

  function onFormSubmit(newFolder) {
    setFolders([...folders, newFolder])
  }

  function onLinkFormSubmit(newLink) {
    setLinks([...links, newLink])
  }

  function onSnippetFormSubmit(newSnippet) {
    setSnippets([...snippets, newSnippet])
  }

  function onNoteFormSubmit(newNote) {
    setNotes([...notes, newNote])
  }

  function onResourceCreation(newResource) {
    setResources([...resources, newResource])
  }

  function onFolderDelete(id) {

    const filteredFolders = folders.filter(f => f.id !== id)

    fetch(`/folders/${id}`, {
      method: 'DELETE'
    })
    .then(setFolders(filteredFolders))
  }

  function onLinkDelete(id) {

    const filteredLinks = links.filter(l => l.id !== id)

    fetch(`/links/${id}`, {
      method: 'DELETE'
    })
    .then(setLinks(filteredLinks))
  }

  function onEditFormSubmit(editedFolder) {
    fetch(`/folders/${editedFolder.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedFolder)
    })
    .then(r => r.json())
    .then((data) => setFolders(
      folders.map((f) => f.id !== data.id ? f : data)
    ))
  }

  function onEditLinkSubmit(editedLink) {
    fetch(`/links/${editedLink.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedLink)
    })
    .then(r => r.json())
    .then((data) => setLinks(
      links.map((l) => l.id !== data.id ? l : data)
    ))
  }

  if (!user) return <LandingPage errors={errors} setErrors={setErrors}/>

  return (
    <> 
    <Switch>
      <Route exact path="/">
        <FoldersPage folders={folders} onFolderDelete={onFolderDelete}/>
      </Route>
      <Route path="/new-folder">
        <NewFolderForm setErrors={setErrors} onFormSubmit={onFormSubmit}/>
      </Route>
      <Route path="/edit-folder/:id">
        <EditFolderForm onEditFormSubmit={onEditFormSubmit}/>
      </Route>
      <Route path="/folders/:id">
        <ResourcesPage 
        onLinkFormSubmit={onLinkFormSubmit} 
        onSnippetFormSubmit={onSnippetFormSubmit}
        onNoteFormSubmit={onNoteFormSubmit}
        onResourceCreation={onResourceCreation}
        onLinkDelete={onLinkDelete}
        />
      </Route>
      <Route to="/links/:id/edit">
        <EditLinkForm onEditLinkSubmit={onEditLinkSubmit}/>
      </Route>
    </Switch>
    </>

  );
}

export default App;
