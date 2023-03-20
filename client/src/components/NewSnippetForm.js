import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function NewSnippetForm({ onSnippetFormSubmit, folderId, onResourceCreation }) {

    const initialSnippetData = {
        snippet_name: "",
        description: "",
        snippet: ""
    }

    const history = useHistory()
    const [snippetFormData, setSnippetFormData] = useState(initialSnippetData)
    const [errors, setErrors] = useState([]);

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
            body: JSON.stringify(snippetFormData),
          }).then((r) => {
            if (r.ok) {
              r.json().then((newSnip) => {
                onSnippetFormSubmit(newSnip);
                handleResourceCreation(newSnip);
                setSnippetFormData({});
                history.push('/');
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
          resourceable_type: "Snippet"
        }
  
        fetch("/resources", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newResourceBody)
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

    return(
        <>
        <div className="hero min-h-screen bg-base-100">
          <div className="hero-content flex-row lg:flex-col">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold text-center">Add a New</h1>
              <h1 className="text-5xl font-bold text-center">Code Snippet</h1>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-200">
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
                    <input
                      name="description"
                      value={snippetFormData.description}
                      onChange={handleFormChange}
                      type="text"
                      placeholder="Description"
                      className="input input-bordered input-primary w-full max-w-xs"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Snippet:</span>
                    </label>
                    <textarea
                      name="snippet"
                      value={snippetFormData.snippet}
                      onChange={handleFormChange}
                      placeholder="Insert Code Here..."
                      class="textarea textarea-bordered textarea-primary textarea-s w-full max-w-xs"
                    ></textarea>
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn btn-primary" type="submit">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    )
}

export default NewSnippetForm;