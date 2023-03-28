import React, { useState, useContext } from "react";
import LogOutButton from "./LogOutButton";
import { UserContext } from "../context/user";
import CCwhitelogo from "../CCwhitelogo.png";
import { NavLink } from "react-router-dom";

function NavBar({ editClicked, setEditClicked, showAddFolder, setShowAddFolder }) {
  const [user, setUser] = useContext(UserContext);

  function handleLogOutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  function handleEditClick() {
    setEditClicked(!editClicked);
  }

  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <a className="btn btn-ghost normal-case text-xl">
            <img src={CCwhitelogo} alt="code/cache logo" />
          </a>
        </div>
        <div className="navbar-end">
          <div className="tooltip tooltip-bottom" data-tip="Edit Folder">
          <button
            className="btn btn-circle bg-secondary"
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
          <div className="tooltip tooltip-bottom" data-tip="Add New Folder">
            <button onClick={() => setShowAddFolder(!showAddFolder)} className="btn btn-circle bg-primary mx-2">
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
                <NavLink to='/blogs'>
                <a>
                  Blog
                </a>  
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
        <LogOutButton handleLogOutClick={handleLogOutClick} />
      </div>
      {/* </div> */}
    </>
  );
}

export default NavBar;
