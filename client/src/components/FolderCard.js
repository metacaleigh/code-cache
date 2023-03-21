import React, { useState, useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
// import { FolderContext } from "../context/folder";
import defImage from '../defaultfolderimage.png';

function FolderCard({
  index,
  id,
  name,
  description,
  editClicked,
  onFolderDelete,
  folder_color,
}) {
  const history = useHistory();
  const [starClicked, setStarClicked] = useState(false);

  function starCard() {
    setStarClicked(!starClicked);
  }

  function editFolder() {
    history.push(`/edit-folder/${id}`);
  }

  // console.log(folder_color);

  return (
    <>
      {editClicked === true ? (
        <div className={`${folder_color}`}>
          <figure><img className="max-h-100" src={defImage} alt="Shoes" /></figure>
          <span className="card-actions justify-end">
            <div
              className="badge badge-default badge-outline gap-2 my-2"
              onClick={editFolder}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="16 3 21 8 8 21 3 21 3 16 16 3"></polygon>
              </svg>
              edit
            </div>
            <div
              className="badge badge-default badge-outline my-2 mr-2 gap-2"
              onClick={() => onFolderDelete(id)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                <line x1="10" y1="11" x2="10" y2="17"></line>
                <line x1="14" y1="11" x2="14" y2="17"></line>
              </svg>
              delete
            </div>
          </span>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>{description}</p>
          </div>
        </div>
      ) : (
        <div className={`${folder_color}`}>
          <figure><img className="max-h-100" src={defImage} alt="Shoes" /></figure>
          <div className="card-body">
            <NavLink to={`/folders/${id}`}>
              <h2 className="card-title">{name}</h2>
              <p>{description}</p>
            </NavLink>
            <div
            className="card-actions justify-end mt-5"
            onClick={starCard}
          >
            {/* {starClicked === true ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 24 24"
                fill="solid"
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
            )} */}
          </div>
          </div>
        </div>
      )}
    </>
  );
}

export default FolderCard;
