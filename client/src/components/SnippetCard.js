import React, { useState } from "react";
import CodeEditor from "@uiw/react-textarea-code-editor";

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
  language,
  tags
}) {
  const [snippetStarred, setSnippetStarred] = useState(is_starred);
  const [snippetClicked, setSnippetClicked] = useState(false)

  function handleSnippetClick() {
    setSnippetClicked(!snippetClicked)
  }

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
    setSnippetStarred(false);
  }

  function handleStar() {
    fetch(`/snippets/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ is_starred: true }),
    });
    setSnippetStarred(true);
  }

  return (
    <>
      {editClicked === true ? (
        <div class="indicator">
          <div onClick={handleEditClick}>
            <span class="indicator-item badge badge-outline my-5 mx-10">
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
          <div className="flex h-75 overflow-y-scroll">
            <div onClick={handleSnippetClick} className="mockup-code bg-base-300 flex-shrink-0 text-primary">
              <div className="text font-medium text-base-content title-font text-center mb-5">
                <div className="tooltip" data-tip="Click to Toggle Code/Description">
                {snippet_name}
                </div>
              </div>
              <div className="mb-5 px-5">
              {snippetClicked === false ? 
            <div>
              <CodeEditor 
                disabled
                data-color-mode="dark"
                value={snippet}
                language={language}
                padding={15}
                style={{
                  fontSize: 14,
                  backgroundColor: "#21222C",
                  fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
                }}
              />
            {tags?.length === 0 ? null :
            <div className="card-actions justify-start mt-2">
                <div className="badge">{tags[0]?.tag_name}</div>
            </div>
            }
            </div>
            :
            <div className="flex flex-col max-w-3/5 text-center">
              <p className="break-all max-w-xs mb-3">{description}</p>
            </div>
              }
              </div>
            </div>
            <div className="indicator">
              <div className="indicator-item indicator-bottom mr-7 mb-7">
            {snippetStarred === true ? (
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
          <div onClick={handleSnippetClick} className="mockup-code bg-base-300 flex-shrink-0 text-primary">
            <div className="text font-medium text-base-content title-font text-center mb-5">
            <div className="tooltip" data-tip="Click to Toggle Code/Description">
              {snippet_name}
              </div>
            </div>
            <div className="mb-5 px-5">
              {snippetClicked === false ? 
              <div>
              <CodeEditor 
                disabled
                data-color-mode="dark"
                value={snippet}
                language={language}
                padding={15}
                style={{
                  fontSize: 14,
                  backgroundColor: "#21222C",
                  fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
                }}
              />
           {tags?.length === 0 ? null :
            <div className="card-actions justify-start mt-2">
                <div className="badge">{tags[0]?.tag_name}</div>
            </div>
            }
              </div>
            :
            <div className="flex flex-col max-w-3/5 text-center">
              <p className="break-all max-w-xs mb-3">{description}</p>
            </div>
              }
            </div>
          </div>
          <div className="indicator">
            <div className="indicator-item indicator-bottom mr-7 mb-7">
          {snippetStarred === true ? (
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
