import React, { useState, useEffect } from 'react';
import BlogsList from './BlogsList';
import CCwhitelogo from '../CCwhitelogo.png';
import { useHistory, useRouteMatch, Switch, Route } from "react-router-dom";
import BlogShow from './BlogShow';

function BlogsPage() {
    const [blogs, setBlogs] = useState([])
    const history = useHistory()

    useEffect(() => {
        fetch('/blogs')
            .then(r => r.json())
            .then((blogs) => setBlogs(blogs))
    }, [])

    function backToHome() {
        history.push("/")
    }
    
    const match = useRouteMatch()

    // console.log(blogs)
    return (
        <>
        <div className="navbar bg-base-100">
        <a onClick={backToHome} className="btn btn-ghost normal-case text-xl">
            <img src={CCwhitelogo}/>
        </a>
        </div>
        <Switch>
        <Route path={`${match.url}/:id`}>
            <BlogShow/>
        </Route>
        <BlogsList blogs={blogs} />
        </Switch>
        </>
    )
}

export default BlogsPage;