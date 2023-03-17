import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
// import { FolderContext } from "../context/folder";

function FolderCard({ id, name, description, image_url, editClicked }) {
  const folderClassNames = [
    "card w-96 h-40 bg-primary text-primary-content my-5",
    "card w-96 h-40 bg-secondary text-primary-content my-5",
    "card w-96 h-40 bg-accent text-primary-content my-5",
    "card w-96 h-40 bg-warning text-primary-content my-5",
    "card w-96 h-40 bg-info text-primary-content my-5",
  ];

  const folderColor =
    folderClassNames[Math.floor(Math.random() * folderClassNames.length)];

  return (
    <>
      <NavLink to={`/folders/${id}`}>
        {editClicked === true ? (
          <div className={folderColor}>
            <div className="badge badge-white badge-outline justify-right gap-2 m-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="16 3 21 8 8 21 3 21 3 16 16 3"></polygon></svg>
              edit
            </div>
            <div className="badge badge-default badge-outline gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
              delete
            </div>
            <div className="card-body">
              <h2 className="card-title">{name}</h2>
              <p>{description}</p>
            </div>
          </div>
        ) : (
          <div className={folderColor}>
            <div className="card-body">
              <h2 className="card-title">{name}</h2>
              <p>{description}</p>
            </div>
          </div>
        )}
      </NavLink>
    </>
  );
}

export default FolderCard;
