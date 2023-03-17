import React, { useState, useEffect } from "react";
import LinksView from "./LinksView";
import SnippetsView from "./SnippetsView";
import NotesView from "./NotesView";
import { Route, useRouteMatch, NavLink, useLocation, useParams, Switch } from "react-router-dom";

function ResourcesList({ folderContent: {name, links, notes, snippets} }) {

    const location = useLocation()
    // console.log(location)
    const {id} = useParams()
    console.log(id)
    const match = useRouteMatch()
    // console.log(match)
    // console.log("links", folderContent.links)
    // console.log(folderContent.links)

  return (
    <>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* <!-- Navbar --> */}
          <div className="w-full navbar bg-default">
            <div className="flex-none lg:hidden">
              <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="flex-1 px-2 mx-2">
              Choose which resources you would like to view...
            </div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal">
                <li>
                    <NavLink to={`/folders/${id}/links`}>
                        Links
                    </NavLink>
                </li>
                <li>
                    <NavLink to={`/folders/${id}/snippets`}>
                        Code Snippets
                    </NavLink>
                </li>
                <li>
                    <NavLink to={`/folders/${id}/notes`}>
                        Notes
                    </NavLink>
                </li>
              </ul>
            </div>
          </div>
          {/* <!-- Page content here --> */}
          <div className="flex flex-wrap w-full mb-8 flex-col items-center text-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mt-3 mb-2 text-gray-900">
            {name} Folder
            </h1>
          </div>
          <Switch>
          <Route exact path={`${match.url}/links`}>
                <LinksView links={links}/>
            </Route>
            <Route exact path={`${match.url}`}>
                <LinksView links={links}/>
            </Route>
            <Route exact path={`${match.url}/snippets`}>
                <SnippetsView snippets={snippets}/>
            </Route>
            <Route exact path={`${match.url}/notes`}>
                <NotesView notes={notes}/>
            </Route>
          </Switch>
        </div>
      </div>
    </>
  );
}

export default ResourcesList;
