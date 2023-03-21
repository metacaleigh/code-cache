import React, { useState } from "react";

function SnippetCard({
  onSnippetDelete,
  setSnippetId,
  showSnippetEdit,
  setShowSnippetEdit,
  editClicked,
  snippet_name,
  description,
  snippet,
  is_starred,
  id,
}) {
  const [starred, setStarred] = useState(is_starred);

  function handleEditClick() {
    setSnippetId(id);
    setShowSnippetEdit(!showSnippetEdit);
  }

  function handleUnstar() {
    fetch(`/snippets/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ is_starred: false }),
    });
    setStarred(false);
  }

  function handleStar() {
    fetch(`/snippets/${id}`, {
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
            <span class="indicator-item badge badge-gray-900 my-5 mx-10">
              ✏️ Edit
            </span>
          </div>
          <div onClick={() => onSnippetDelete(id)}>
            <span class="indicator-item badge badge-gray-900 my-5 mx-28">
              🗑 Delete
            </span>
          </div>
          <div className="flex h-75 overflow-y-scroll">
            <div className="mockup-code bg-base-300 flex-shrink-0 text-primary">
              <div className="text font-medium text-base-content title-font text-center mb-5">
                {snippet_name}
              </div>
              <div className="mx-7">
              <pre>
                <code>{snippet}</code>
              </pre>
              </div>
            </div>
            <div className="indicator">
              <div className="indicator-item indicator-bottom mr-7 mb-7">
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
            </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex h-75 overflow-y-scroll">
          <div className="mockup-code bg-base-300 flex-shrink-0 text-primary">
            <div className="text font-medium text-base-content title-font text-center mb-5">
              {snippet_name}
            </div>
            <div>
            <pre className="mx-7">
              <code>{snippet}</code>
            </pre>
            </div>
          </div>
          <div className="indicator">
            <div className="indicator-item indicator-bottom mr-7 mb-7">
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
          </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SnippetCard;
