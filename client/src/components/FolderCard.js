import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
// import { FolderContext } from "../context/folder";


function FolderCard({ id, name, description, image_url }) {

    const folderClassNames = ["card w-96 bg-primary text-primary-content", "card w-96 bg-secondary text-primary-content", "card w-96 bg-accent text-primary-content", "card w-96 bg-info text-primary-content"]

    const folderColor = folderClassNames[Math.floor(Math.random() * folderClassNames.length)]

    return(
        <>
        <NavLink to={`/folders/${id}`}>
            <div className={folderColor}>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                </div>
            </div>  
        </NavLink>
        </>
    )
}

export default FolderCard;