import React, { useState } from "react";
import CClogo from "../CCwhitelogo.png";
import { useHistory, NavLink } from "react-router-dom";

function ResourcesNavBar({ editClicked, setEditClicked, folderId, search, setSearch }) {
  // const [editClicked, setEditClicked] = useState(false);

  const history = useHistory();

  function handleLogoClick() {
    history.push("/");
  }

  function handleEditClick() {
    setEditClicked(!editClicked);
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
              placeholder="Search"
              className="input input-bordered"
            />
          </div>
          <div class="dropdown">
          <div className="tooltip tooltip-bottom" data-tip="New Resource">
          <button tabIndex="0" className="btn btn-circle bg-secondary">
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
          <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
              <li><NavLink to={`/folders/${folderId}/new-link`}><a>New Link</a></NavLink></li>
              <li><NavLink to={`/folders/${folderId}/new-snippet`}><a>New Snippet</a></NavLink></li>
              <li><NavLink to={`/folders/${folderId}/new-note`}><a>New Note</a></NavLink></li>
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
          <div className="dropdown dropdown-end">
          <div className="tooltip tooltip-bottom" data-tip="More...">
          <button tabIndex={0} className="btn btn-circle bg-accent mr-2">
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
              <a>Blog</a>
            </li>
            <li>
              <a>About Us</a>
            </li>
            <li>
              <a>Settings</a>
            </li>
          </ul>
        </div>
        </div>
      </div>
    </>
  );
}

export default ResourcesNavBar;
