import React, { useState, useEffect } from 'react';
import { useLocation, useParams, useRouteMatch } from "react-router-dom";

function EditSnippetForm({ snippet, onEditSnippetSubmit }) {

    const {id} = useParams()
    console.log(id)
    // const [editLink, setEditLink] = useState({})
    const [snippetFormData, setSnippetFormData] = useState({})
    const location = useLocation()
    const match = useRouteMatch()
    // console.log(match)
    // console.log(location)

    useEffect(() => {
        setSnippetFormData({
            snippet_name: snippet.snippet_name,
            description: snippet.description,
            snippet: snippet.snippet
        })
    }, [])

    function handleEditFormChange(e) {
        const { name, value } = e.target;
        setSnippetFormData({ ...snippetFormData, [name]: value });
    }

    function handleEditFormSubmit(e) {
        e.preventDefault();
        onEditSnippetSubmit(snippet.id, snippetFormData)
    }

    if (!snippetFormData) return null;
    return(
<>
        <div className="hero min-h-max bg-base-100 my-20">
          <div className="hero-content flex-row lg:flex-col">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold text-center">Edit Code Snippet</h1>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-300">
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
                      <span className="label-text">Code Snippet:</span>
                    </label>
                    <textarea
                      name="snippet"
                      value={snippetFormData.snippet}
                      onChange={handleEditFormChange}
                      placeholder="Insert Code Snippet Here..."
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

export default EditSnippetForm;