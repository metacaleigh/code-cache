import '../index.css';
import react, { useState, useEffect, useContext } from "react";
import { UserContext } from '../context/user';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LandingPage from './LandingPage';
import MainNavBar from './MainNavBar';
import FoldersPage from "./FoldersPage";
import ResourcesPage from "./ResourcesPage";
import Loading from './Loading';
import BlogsPage from './BlogsPage';
import BlogShow from './BlogShow';
import AboutUs from './AboutUs';

function App() {

  const [user, setUser] = useContext(UserContext)
  // const [folders, setFolders] = useState([])
  const [errors, setErrors] = useState([])
  
  useEffect(() => {
    fetch("/me").then((r) => {
      if(r.ok) {
        r.json().then((user) => setUser(user))
      }
    })
  }, [setUser])
  // console.log(folders)

  if (!user) return <LandingPage errors={errors} setErrors={setErrors}/>

  // console.log(user)

  // if (user.folders !== folders) return <Loading />
  return (
    <> 
    <Switch>
      <Route exact path="/">
        <FoldersPage />
      </Route>
      <Route path="/folders/:id">
        <ResourcesPage />
      </Route>
      <Route path="/blogs">
        <BlogsPage />
      </Route>
      <Route path="/about-us">
        <AboutUs />
      </Route>
    </Switch>
    </>

  );
}

export default App;
