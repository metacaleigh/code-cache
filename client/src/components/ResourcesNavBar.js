import React, { useState } from "react";
import CClogo from "../CCwhitelogo.png";
import { useHistory, NavLink, useLocation } from "react-router-dom";

function ResourcesNavBar({
  editClicked,
  setEditClicked,
  folderId,
  search,
  setSearch,
  starFilterOn,
  setStarFilterOn,
  tagsClicked,
  setTagsClicked,
  showAddLink,
  setShowAddLink,
  showAddNote,
  setShowAddNote,
  showAddSnippet,
  setShowAddSnippet
}) {
  // const [editClicked, setEditClicked] = useState(false);

  const location = useLocation();
  // console.log(location)
  const history = useHistory();

  function handleLogoClick() {
    history.push("/");
  }

  function handleEditClick() {
    setEditClicked(!editClicked);
  }

  function handleStarFilterClick() {
    setStarFilterOn(!starFilterOn);
  }

  function handleTagsClick() {
    setTagsClicked(!tagsClicked)
  }

  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a
            className="btn btn-ghost normal-case text-xl"
            onClick={handleLogoClick}
          >
            <img src={CClogo} alt="code/cache logo" />
          </a>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Search by Resource Name or Tag..."
              className="input input-bordered w-80"
            />
          </div>
          {/* {location.pathname === `/folders/${folderId}` ||
          location.pathname === `/folders/${folderId}/links` ? (
            <div className="dropdown">
            <div className="tooltip tooltip-bottom" data-tip="Manage Link Tags">
              <button onClick={handleTagsClick} tabIndex={0} className="btn btn-circle bg-info">
                {tagsClicked === true ? 
                  <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#000000"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                  <line x1="7" y1="7" x2="7.01" y2="7"></line>
                </svg>
                :
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                  <line x1="7" y1="7" x2="7.01" y2="7"></line>
                </svg>
}
              </button>
            </div>
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Manage Tags</a></li>
              <li><a>Item 2</a></li>
            </ul>
          </div>
          ) : null} */}
          <div class="dropdown">
            <div className="tooltip tooltip-bottom" data-tip="New Resource">
              <button tabIndex={0} className="btn btn-circle bg-secondary">
                {/* <label  class="btn m-1">Click</label> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </button>
            </div>
            <ul
              tabIndex="0"
              class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                {/* <NavLink to={`/folders/${folderId}/new-link`}> */}
                  <a onClick={() => setShowAddLink(!showAddLink)}>New Link</a>
                {/* </NavLink> */}
              </li>
              <li>
                {/* <NavLink to={`/folders/${folderId}/new-snippet`}> */}
                  <a onClick={() => setShowAddSnippet(!showAddSnippet)}>New Snippet</a>
                {/* </NavLink> */}
              </li>
              <li>
                {/* <NavLink to={`/folders/${folderId}/new-note`}> */}
                  <a onClick={() => setShowAddNote(!showAddNote)}>New Note</a>
                {/* </NavLink> */}
              </li>
            </ul>
          </div>
          <div className="tooltip tooltip-bottom" data-tip="Edit Resources">
            <button
              className="btn btn-circle bg-primary"
              onClick={handleEditClick}
            >
              {editClicked === true ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="16 3 21 8 8 21 3 21 3 16 16 3"></polygon>
                </svg>
              )}
            </button>
          </div>
          <div className="tooltip tooltip-bottom" data-tip="Show Starred">
            <button
              tabIndex={0}
              className="btn btn-circle bg-accent"
              onClick={handleStarFilterClick}
            >
              {starFilterOn === true ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="#000000"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              )}
            </button>
          </div>
          <div className="dropdown dropdown-end">
            <div className="tooltip tooltip-bottom" data-tip="More...">
              <button tabIndex={0} className="btn btn-circle bg-warning">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="1"></circle>
                  <circle cx="19" cy="12" r="1"></circle>
                  <circle cx="5" cy="12" r="1"></circle>
                </svg>
              </button>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to="/blogs">
                <a>Blog</a>
                </NavLink>
              </li>
              <li>
              <NavLink to="/about-us">
                <a>About Us</a>
              </NavLink>
              </li>
              {/* <li>
                <a>Settings</a>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResourcesNavBar;
