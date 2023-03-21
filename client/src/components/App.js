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

  useEffect(() => {
    fetch("/me").then((r) => {
      if(r.ok) {
        r.json().then((user) => setUser(user))
      }
    })

    fetch("/folders")
      .then((r) => (r.json()))
      .then((folders) => setFolders(folders))
  }, [])
  // console.log(folders)

  function onFormSubmit(newFolder) {
    setFolders([...folders, newFolder])
  }

  function onFolderDelete(id) {

    const filteredFolders = folders.filter(f => f.id !== id)

    fetch(`/folders/${id}`, {
      method: 'DELETE'
    })
    .then(setFolders(filteredFolders))
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
        <ResourcesPage />
      </Route>
      {/* <Route path="/links/:id/edit">
        <EditLinkForm onEditLinkSubmit={onEditLinkSubmit}/>
      </Route> */}
    </Switch>
    </>

  );
}

export default App;
