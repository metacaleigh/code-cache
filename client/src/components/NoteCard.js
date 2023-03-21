import React, { useState } from "react";

function NoteCard({
  setNoteId,
  showNoteEdit,
  setShowNoteEdit,
  editClicked,
  note_name,
  note,
  id,
  onNoteDelete,
  is_starred,
}) {
  const [starred, setStarred] = useState(is_starred);

  function handleEditClick() {
    setNoteId(id);
    setShowNoteEdit(!showNoteEdit);
  }

  function handleUnstar() {
    fetch(`/notes/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ is_starred: false }),
    });
    setStarred(false);
  }

  function handleStar() {
    fetch(`/notes/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ is_starred: true }),
    });
    setStarred(true);
  }

  return (
    <>
      {editClicked === true ? (
        <div class="indicator">
          <div onClick={handleEditClick}>
            <span class="indicator-item badge badge-neutral my-5 mx-10">
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
          <div onClick={() => onNoteDelete(id)}>
            <span class="indicator-item badge badge-neutral my-5 mx-28">
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
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                <line x1="10" y1="11" x2="10" y2="17"></line>
                <line x1="14" y1="11" x2="14" y2="17"></line>
              </svg>
              Delete
            </span>
          </div>
          <div className="card w-96 bg-base-300 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{note_name}</h2>
              <p>{note}</p>
              <div className="card-actions justify-end">
                {starred === true ? (
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
            </div>
          </div>
        </div>
      ) : (
        <div className="card w-96 bg-base-300 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">{note_name}</h2>
            <p>{note}</p>
            <div className="card-actions justify-end">
              {starred === true ? (
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
          </div>
        </div>
      )}
    </>
  );
}

export default NoteCard;
