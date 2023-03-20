import React from "react";
import { NavLink } from "react-router-dom";

function LinkCard({ id, link_name, link_url, description, editClicked, onLinkDelete }) {


    return (
        <>

    { editClicked === true ? 
        <div class="indicator">
        <NavLink to={`/links/${id}/edit`}><span class="indicator-item badge badge-gray-900 my-8 mx-10">✏️ Edit</span></NavLink>
        <div onClick={() => onLinkDelete(id)}><span class="indicator-item badge badge-gray-900 my-8 mx-28">🗑 Delete</span></div>
        <div class="card w-96 bg-base-200 shadow-xl my-3">
        <div className="card-body">
            <h2 className="card-title">
            {link_name}
            <a href={link_url}><div className="badge badge-secondary">Link</div></a>
            </h2>
            <p>{description}</p>
            <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div> 
            <div className="badge badge-outline">Products</div>
            </div>
        </div>
        </div>
      </div>
      : 
      <div class="card w-96 bg-base-200 shadow-xl my-3">
      <div className="card-body">
          <h2 className="card-title">
          {link_name}
          <a href={link_url}><div className="badge badge-secondary">Link</div></a>
          </h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div> 
          <div className="badge badge-outline">Products</div>
          </div>
      </div>
      </div>
    }
        </>

    )
}

export default LinkCard;