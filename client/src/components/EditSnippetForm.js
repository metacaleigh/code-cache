import React, { useState, useEffect } from "react";
import { useLocation, useParams, useRouteMatch } from "react-router-dom";
import CodeEditor from "@uiw/react-textarea-code-editor";

function EditSnippetForm({ snippet, onEditSnippetSubmit, onSnippetDelete, showSnippetEdit, setShowSnippetEdit }) {
  const { id } = useParams();
  console.log(id);
  // const [editLink, setEditLink] = useState({})
  const [snippetFormData, setSnippetFormData] = useState({});
  const [currentLang, setCurrentLang] = useState(snippet.language);
  const location = useLocation();
  const match = useRouteMatch();
  // console.log(match)
  // console.log(location)

  useEffect(() => {
    setSnippetFormData({
      snippet_name: snippet.snippet_name,
      description: snippet.description,
      snippet: snippet.snippet
    });
  }, []);

  function handleEditFormChange(e) {
    const { name, value } = e.target;
    setSnippetFormData({ ...snippetFormData, [name]: value });
  }

  function handleEditFormSubmit(e) {
    e.preventDefault();
    onEditSnippetSubmit(snippet.id, snippetFormData, currentLang);
  }

  const languages = [
    'arduino',
    'bash',
    'clike',
    'cpp',
    'csharp',
    'css',
    'diff',
    'go',
    'ini',
    'java',
    'javascript',
    'json',
    'kotlin',
    'less',
    'lua',
    'makefile',
    'markdown',
    'markup',
    'objectivec',
    'perl',
    'php',
    'python',
    'r',
    'regex',
    'ruby',
    'rust',
    'sass',
    'scss',
    'sql',
    'swift',
    'typescript',
    'vbnet',
    'yaml']

  if (!snippetFormData) return null;
  return (
    <>
      <div className="card w-96 bg-base-300 shadow-xl mb-10">
        <span className="card-actions justify-end mt-2 mr-2">
          <div
            className="tooltip tooltip-bottom"
            data-tip="Delete Snippet"
          >
            <button
              className="btn btn-sm"
              onClick={() => onSnippetDelete(snippet.id)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
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
            </button>
          </div>
        </span>
        <h1 className="card-title mt-5 ml-28 text-neutral">
          Edit Code Snippet
        </h1>
        <div className="card-body">
          <form onSubmit={handleEditFormSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Snippet Name:</span>
              </label>
              <input
                name="snippet_name"
                value={snippetFormData.snippet_name}
                onChange={handleEditFormChange}
                type="text"
                placeholder="Snippet Name"
                className="input input-bordered input-primary w-full max-w-xs"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description:</span>
              </label>
              <textarea
                name="description"
                value={snippetFormData.description}
                onChange={handleEditFormChange}
                placeholder="Description (Optional)"
                class="textarea textarea-bordered textarea-primary textarea-s w-full max-w-xs"
              ></textarea>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Language:</span>
              </label>
              <select className="select select-primary w-full max-w-xs" value={currentLang} onChange={(e) => setCurrentLang(e.target.value)}>
                {languages.map((l) => {
                  return <option key={l} value={l}>{l}</option>
                })}
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Code Snippet:</span>
              </label>
              <CodeEditor 
                data-color-mode="dark"
                name="snippet"
                value={snippetFormData.snippet}
                language={currentLang}
                placeholder="Enter code snippet..."
                onChange={handleEditFormChange}
                padding={15}
                style={{
                  fontSize: 12,
                  backgroundColor: "#3E3844",
                  fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
                }}
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary" type="submit">
                Submit
              </button>
            </div>
          </form>
          <a
            className="link link-primary m"
            onClick={() => setShowSnippetEdit(!showSnippetEdit)}
          >
            Cancel
          </a>
        </div>
      </div>
    </>
  );
}

export default EditSnippetForm;
