import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import ErrorMsg from "./ErrorMsg";
import CodeEditor from "@uiw/react-textarea-code-editor";

function NewSnippetForm({
  onSnippetFormSubmit,
  folderId,
  onResourceCreation,
  showAddSnippet,
  setShowAddSnippet,
}) {
  const initialSnippetData = {
    snippet_name: "",
    description: "",
    snippet: "",
    is_starred: false,
  };

  const history = useHistory();
  const [snippetFormData, setSnippetFormData] = useState(initialSnippetData);
  const [errors, setErrors] = useState([]);
  const [currLang, setCurrLang] = useState("javascript")

  function handleFormChange(e) {
    const { name, value } = e.target;
    setSnippetFormData({ ...snippetFormData, [name]: value });
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    fetch("/snippets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        ...snippetFormData, 
        is_starred: false,
        language: currLang
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((newSnip) => {
          onSnippetFormSubmit(newSnip);
          handleResourceCreation(newSnip);
          setSnippetFormData({});
          setShowAddSnippet(!showAddSnippet);
          // history.push(`/folders/${folderId}/snippets`);
        });
      } else {
        r.json().then((err) => setErrors(err?.errors));
      }
    });
  }

  function handleResourceCreation(newSnippet) {
    const newResourceBody = {
      folder_id: folderId,
      resourceable_id: newSnippet.id,
      resourceable_type: "Snippet",
    };

    fetch("/resources", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newResourceBody),
    }).then((r) => {
      if (r.ok) {
        r.json().then((newResource) => {
          onResourceCreation(newResource);
          // history.push("/");
        });
      } else {
        r.json().then((err) => setErrors(err?.errors));
      }
    });
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

  return (
    <>
      <div className="card w-96 bg-base-300 shadow-xl mb-10">
        <h1 className="card-title mt-5 ml-28 text-neutral">New Code Snippet</h1>
        <div className="card-body">
          <form onSubmit={handleFormSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Snippet Name:</span>
              </label>
              <input
                name="snippet_name"
                value={snippetFormData.snippet_name}
                onChange={handleFormChange}
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
                onChange={handleFormChange}
                placeholder="Description (Optional)"
                class="textarea textarea-bordered textarea-primary textarea-s w-full max-w-xs"
              ></textarea>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Select Language:</span>
              </label>
              <select className="select select-primary w-full max-w-xs" value={currLang} onChange={(e) => setCurrLang(e.target.value)}>
              <option disabled selected>If language not listed, select "markup"</option>
                {languages.map((l) => {
                  return <option key={l} value={l}>{l}</option>
                })}
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Snippet:</span>
              </label>
                <CodeEditor 
                    // disabled
                    data-color-mode="dark"
                    name="snippet"
                    value={snippetFormData.snippet}
                    language={currLang}
                    placeholder="Enter code snippet..."
                    onChange={handleFormChange}
                    padding={15}
                    style={{
                      fontSize: 12,
                      backgroundColor: "#3E3844",
                      fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
                    }}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Add a Tag:</span>
              </label>
              <input
                name="tag_name"
                value={snippetFormData.tag_name}
                onChange={handleFormChange}
                type="text"
                placeholder="Must start w/ #, no spaces (i.e. #MDN)"
                className="input input-bordered input-primary w-full max-w-xs"
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
            onClick={() => setShowAddSnippet(!showAddSnippet)}
          >
            Cancel
          </a>
        </div>
        <ErrorMsg errors={errors} />
      </div>
    </>
  );
}

export default NewSnippetForm;
