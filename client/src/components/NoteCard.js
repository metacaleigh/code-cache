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
              ✏️ Edit
            </span>
          </div>
          <div onClick={() => onNoteDelete(id)}>
            <span class="indicator-item badge badge-neutral my-5 mx-28">
              🗑 Delete
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
