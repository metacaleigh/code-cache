import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import ErrorMsg from './ErrorMsg';

function NewNoteForm({ onNoteFormSubmit, folderId, onResourceCreation, showAddNote, setShowAddNote }) {
    
    const initialNoteData = {
        note_name: "",
        note: "",
        is_starred: false,
        tag_name: ""
    }

    const history = useHistory()
    const [noteFormData, setNoteFormData] = useState(initialNoteData)
    const [errors, setErrors] = useState([]);

    function handleFormChange(e) {
        const { name, value } = e.target;
        setNoteFormData({ ...noteFormData, [name]: value });
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        fetch("/notes", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({...noteFormData, is_starred: false}),
          }).then((r) => {
            if (r.ok) {
              r.json().then((newNote) => {
                onNoteFormSubmit(newNote);
                handleResourceCreation(newNote);
                setNoteFormData({});
                setShowAddNote(!showAddNote)
                // history.push(`/folders/${folderId}/notes`);
              });
            } else {
              r.json().then((err) => setErrors(err?.errors));
            }
          });
    }

    function handleResourceCreation(newNote) {
      const newResourceBody = {
        folder_id: folderId,
        resourceable_id: newNote.id,
        resourceable_type: "Note"
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
            <div className="card w-96 bg-base-300 shadow-xl mb-10">
            <h1 className="card-title mt-5 ml-36 text-neutral">New Note</h1>
              <div className="card-body">
                <form onSubmit={handleFormSubmit}>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Title:</span>
                    </label>
                    <input
                      name="note_name"
                      value={noteFormData.note_name}
                      onChange={handleFormChange}
                      type="text"
                      placeholder="Title"
                      className="input input-bordered input-primary w-full max-w-xs"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Note:</span>
                    </label>
                    <textarea
                      name="note"
                      value={noteFormData.note}
                      onChange={handleFormChange}
                      placeholder="Note"
                      class="textarea textarea-bordered textarea-primary textarea-s w-full max-w-xs"
                    ></textarea>
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Add a Tag:</span>
                    </label>
                    <input
                      name="tag_name"
                      value={noteFormData.tag_name}
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
                onClick={() => setShowAddNote(!showAddNote)}
              >
                Cancel
              </a>
              </div>
              <ErrorMsg errors={errors} />
            </div>
      </>
    )
}

export default NewNoteForm;