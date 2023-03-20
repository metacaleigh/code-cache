import React, { useState, useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
// import { FolderContext } from "../context/folder";

function FolderCard({ index, id, name, description, image_url, editClicked, onFolderDelete }) {
  
  const history = useHistory()
  const [starClicked, setStarClicked] = useState(false)
  const [cardColor, setCardColor] = useState("")

  function starCard() {
    setStarClicked(!starClicked)
  }

  function editFolder() {
    history.push(`/edit-folder/${id}`)
  }

  // function assignCardColor() {
  //   if (index === 1 || 6 || 11 || 16 || 21 || 26 || 31 || 36 || 41 || 46) {
  //     setCardColor("card w-96 h-40 bg-primary text-gray-900 my-1")
  //   } else if (index === 2 || 7 || 12 || 17 || 22 || 27 || 32 || 37 || 42 || 47) {
  //     setCardColor("card w-96 h-40 bg-secondary text-gray-900 my-1")
  //   } else if (index === 3 || 8 || 13 || 18 || 23 || 28 || 33 || 38 || 43 || 48) {
  //     setCardColor("card w-96 h-40 bg-accent text-gray-900 my-1")
  //   } else if (index === 4 || 9 || 14 || 19 || 24 || 29 || 34 || 39 || 44 || 49) {
  //     setCardColor("card w-96 h-40 bg-warning text-gray-900 my-1")
  //   } else if (index === 5 || 10 || 15 || 20 || 25 || 30 || 35 || 40 || 45 || 50) {
  //     setCardColor("card w-96 h-40 bg-info text-gray-900 my-1")
  //   } else {
  //     setCardColor("card w-96 h-40 bg-primary text-gray-900 my-1")
  //   }
  // }

  // function assignCardColor() {
  //   if (index === 1 ) {
  //     setCardColor("card w-96 h-40 bg-primary text-gray-900 my-1")
  //   } else if (index === 2 ) {
  //     setCardColor("card w-96 h-40 bg-secondary text-gray-900 my-1")
  //   } else if (index === 3 ) {
  //     setCardColor("card w-96 h-40 bg-accent text-gray-900 my-1")
  //   } else if (index === 4) {
  //     setCardColor("card w-96 h-40 bg-warning text-gray-900 my-1")
  //   } else if (index === 5 ) {
  //     setCardColor("card w-96 h-40 bg-info text-gray-900 my-1")
  //   } else {
  //     setCardColor("card w-96 h-40 bg-primary text-gray-900 my-1")
  //   }
  // }

  // assignCardColor()

  const folderClassNames = [
    "card w-96 h-40 bg-primary text-gray-900 my-1",
    "card w-96 h-40 bg-secondary text-gray-900 my-1",
    "card w-96 h-40 bg-accent text-gray-900 my-1",
    "card w-96 h-40 bg-warning text-gray-900 my-1",
    "card w-96 h-40 bg-info text-gray-900 my-1",
  ];

  const folderColor =
    folderClassNames[Math.floor(Math.random() * folderClassNames.length)];


  return (
    <>
        {editClicked === true ? (
          <div className={folderColor}>
            <span className="card-actions justify-end">
            <div className="badge badge-default badge-outline gap-2 my-2"
            onClick={editFolder}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="16 3 21 8 8 21 3 21 3 16 16 3"></polygon></svg>
              edit
            </div>
            <div className="badge badge-default badge-outline my-2 mr-2 gap-2"             
            onClick={() => onFolderDelete(id)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
              delete
            </div>
            </span>
            <div className="card-body">
              <h2 className="card-title">{name}</h2>
              <p>{description}</p>
            </div>
          </div>
        ) : (
          <div className={folderColor}>
            <div className="card-body">
            <NavLink to={`/folders/${id}`}>
              <h2 className="card-title">{name}</h2>
              <p>{description}</p>
            </NavLink>
            </div>
            <div className="card-actions justify-end mb-5 mr-5" onClick={starCard}>
              {starClicked === true ?
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="solid" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
              :
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>}
            </div>
          </div>
        )}
    </>
  );
}

export default FolderCard;
