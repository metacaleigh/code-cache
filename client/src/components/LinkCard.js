import React, { useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
// import captureWebsite from 'capture-website';

function LinkCard({
  setLinkId,
  setShowLinkEdit,
  showLinkEdit,
  id,
  link_name,
  link_url,
  description,
  is_starred,
  editClicked,
  onLinkDelete,
}) {
  // useEffect(() => {
  //     await captureWebsite.file(`${link_url}`, `screenshot${id}.png`)
  // }, [])
  const history = useHistory();
  const [starred, setStarred] = useState(is_starred)

  function handleEditClick() {
    setLinkId(id);
    setShowLinkEdit(!showLinkEdit);
  }

  function handleUnstar() {
    fetch(`/links/${id}`, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({is_starred: false})
    })
    setStarred(false)
  }

  function handleStar() {
    fetch(`/links/${id}`, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({is_starred: true})
    })
    setStarred(true)
  }

  return (
    <>
      {editClicked === true ? (
        <div class="indicator">
          <div onClick={handleEditClick}>
            <span class="indicator-item badge badge-gray-900 my-8 mx-10">
              ✏️ Edit
            </span>
          </div>
          <div onClick={() => onLinkDelete(id)}>
            <span class="indicator-item badge badge-gray-900 my-8 mx-28">
              🗑 Delete
            </span>
          </div>
          <div class="card w-96 bg-base-300 shadow-xl my-3">
            <figure><img src="https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">
                {link_name}
                <a href={link_url}>
                  <div className="badge badge-secondary">Link</div>
                </a>
              </h2>
              <p>{description}</p>
              <div className="card-actions justify-end">
                {starred === true ? 
                <div onClick={handleUnstar}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="#fec566" stroke="#fec566" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                </div>
                :
                <div onClick={handleStar}>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#fec566" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                </div>}
                {/* <div className="badge badge-outline">Fashion</div>
                <div className="badge badge-outline">Products</div> */}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div class="card w-96 bg-base-300 shadow-xl my-3">
          <figure><img src="https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">
              {link_name}
              <a href={link_url}>
                <div className="badge badge-secondary">Link</div>
              </a>
            </h2>
            <p>{description}</p>
            <div className="card-actions justify-end">
            {starred === true ? 
                <div onClick={handleUnstar}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="#fec566" stroke="#fec566" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                </div>
                :
                <div onClick={handleStar}>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#fec566" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                </div>}
              {/* <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline">Products</div> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default LinkCard;
