import '../index.css';
import react, { useState, useEffect, useContext } from "react";
import { UserContext } from '../context/user';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LandingPage from './LandingPage';
import MainNavBar from './MainNavBar';
import FoldersPage from "./FoldersPage";
import NewFolderForm from "./NewFolderForm";

function App() {

  const [user, setUser] = useContext(UserContext)
  const [folders, setFolders] = useState([])

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

  if (!user) return <LandingPage/>

  return (
    <> 
    <Switch>
      <Route exact path="/">
        <FoldersPage folders={folders} />
      </Route>
      <Route path="/new-folder">
        <NewFolderForm onFormSubmit={onFormSubmit}/>
      </Route>
    </Switch>
    </>

  );
}

export default App;
