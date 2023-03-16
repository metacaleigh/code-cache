import '../index.css';
import react, { useState, useEffect, useContext } from "react";
import { UserContext } from '../context/user';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LandingPage from './LandingPage';
import MainNavBar from './MainNavBar';
import FoldersPage from "./FoldersPage";
import NewFolderForm from "./NewFolderForm";
import ResourcesPage from "./ResourcesPage";

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

  if (!user) return <LandingPage errors={errors} setErrors={setErrors}/>

  return (
    <> 
    <Switch>
      <Route exact path="/">
        <FoldersPage folders={folders} />
      </Route>
      <Route path="/new-folder">
        <NewFolderForm setErrors={setErrors} onFormSubmit={onFormSubmit}/>
      </Route>
      <Route path="/folders/:id">
        <ResourcesPage />
      </Route>
    </Switch>
    </>

  );
}

export default App;
