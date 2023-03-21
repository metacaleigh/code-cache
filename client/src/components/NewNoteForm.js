import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function NewNoteForm({ onNoteFormSubmit, folderId, onResourceCreation }) {
    
    const initialNoteData = {
        note_name: "",
        note: "",
        is_starred: false
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
                history.push('/');
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
        <div className="hero min-h-screen bg-base-100">
          <div className="hero-content flex-row lg:flex-col">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold text-center">Add a New Note</h1>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-300">
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

export default NewNoteForm;