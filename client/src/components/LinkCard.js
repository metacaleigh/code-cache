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
  tags
}) {

  // useEffect(() => {
  //   getScreenCapture()
  // }, [])

  // async function getScreenCapture() {
  //   const x = await captureWebsite.file(`${link_url}`, `code-cache/client/src/screencaptures/screenshot${id}.png`);
  //   console.log(x)
  // }

  const history = useHistory();
  const [linkStarred, setLinkStarred] = useState(is_starred);
  const [capture, setCapture] = useState("");

  function handleEditClick() {
    setLinkId(id);
    setShowLinkEdit(!showLinkEdit);
  }

  function handleTagsClick() {}

  function handleUnstar() {
    // setLinkStarred(!linkStarred);
    // onUnstar(id)
    fetch(`/links/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ is_starred: false }),
    })
    setLinkStarred(!linkStarred)
  }

  function handleStar() {
    // setLinkStarred(!linkStarred);
    // onStar(id)
    fetch(`/links/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ is_starred: true }),
    })
    setLinkStarred(!linkStarred)
  }

  return (
    <>
      {/* <div class="card w-96 bg-base-300 shadow-xl my-3"> */}
        {editClicked === true ? (
          <div class="indicator">
            <div onClick={handleEditClick}>
              <span class="indicator-item badge badge-outline my-8 mx-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="16 3 21 8 8 21 3 21 3 16 16 3"></polygon>
                </svg>
                Edit
              </span>
            </div>
                 <div class="card w-96 bg-base-300 shadow-xl my-3">
                 <div className="card-body">
                   <h2 className="card-title">
                     {link_name}
                     <a href={link_url}>
                       <div className="tooltip" data-tip="Visit Site">
                         <div className="badge badge-secondary">Link</div>
                       </div>
                     </a>
                   </h2>
                   <p>{description}</p>
                   {tags?.length === 0 ? null :
                    <div className="card-actions justify-start">
                        <div className="badge">{tags[0]?.tag_name}</div>
                    </div>
                    }
                   <div className="card-actions justify-end">
                     {linkStarred === true ? (
                       <div onClick={handleUnstar}>
                         <svg
                           xmlns="http://www.w3.org/2000/svg"
                           width="25"
                           height="25"
                           viewBox="0 0 24 24"
                           fill="#fec566"
                           stroke="#fec566"
                           strokeWidth="2"
                           strokeLinecap="round"
                           strokeLinejoin="round"
                         >
                           <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                         </svg>
                       </div>
                     ) : (
                       <div onClick={handleStar}>
                         <svg
                           xmlns="http://www.w3.org/2000/svg"
                           width="25"
                           height="25"
                           viewBox="0 0 24 24"
                           fill="none"
                           stroke="#fec566"
                           strokeWidth="2"
                           strokeLinecap="round"
                           strokeLinejoin="round"
                         >
                           <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                         </svg>
                       </div>
                     )}
                     {/* <div className="badge badge-outline">Fashion</div>
                       <div className="badge badge-outline">Products</div> */}
                   </div>
                   {/* <div className="card-actions justify-start">
                       <div className="badge badge-outline">Products</div>
                   </div> */}
                 </div>
               </div>
               </div>
        ) : (
        <div className="card w-96 bg-base-300 shadow-xl my-3">
        <div className="card-body">
          <h2 className="card-title">
            {link_name}
            <a href={link_url}>
              <div className="tooltip" data-tip="Visit Site">
                <div className="badge badge-secondary">Link</div>
              </div>
            </a>
          </h2>
          <p>{description}</p>
          {tags?.length === 0 ? null :
          <div className="card-actions justify-start">
              <div className="badge">{tags[0]?.tag_name}</div>
          </div>
          }
          <div className="card-actions justify-end">
            {linkStarred === true ? (
              <div onClick={handleUnstar}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="#fec566"
                  stroke="#fec566"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </div>
            ) : (
              <div onClick={handleStar}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fec566"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </div>
            )}
            {/* <div className="badge badge-outline">Fashion</div> */}
              {/* <div className="badge badge-outline">Products</div> */}
          </div>
          {/* <div className="card-actions justify-start">
              <div className="badge badge-outline">Products</div>
          </div> */}
        </div>
      </div>
)}
    </>
  );
}

export default LinkCard;
