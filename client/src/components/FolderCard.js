import React from "react";

function FolderCard({ id, name, description, image_url }) {

    function cardColor() {
        if (id % 2) {
            return "card w-96 bg-secondary text-primary-content"
       } else {
           return "card w-96 bg-primary text-primary-content"
       }
    }

    return(
        <>
          <div className={cardColor(id)}>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
            </div>
            </div>  
        </>
    )
}

export default FolderCard;