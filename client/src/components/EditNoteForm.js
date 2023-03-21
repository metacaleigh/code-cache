import React, { useState, useEffect } from 'react';
import { useLocation, useParams, useRouteMatch } from "react-router-dom";

function EditLinkForm({ note, onEditNoteSubmit }) {

    const {id} = useParams()
    console.log(id)
    const [noteFormData, setNoteFormData] = useState({})
    const location = useLocation()
    const match = useRouteMatch()
    // console.log(match)
    // console.log(location)

    useEffect(() => {
        setNoteFormData({
            note_name: note.note_name,
            note: note.note
        })
    }, [])

    function handleEditFormChange(e) {
        const { name, value } = e.target;
        setNoteFormData({ ...noteFormData, [name]: value });
    }

    function handleEditFormSubmit(e) {
        e.preventDefault();
        onEditNoteSubmit(note.id, noteFormData)
    }

    if (!noteFormData) return null;
    return(
<>
        <div className="hero min-h-max bg-base-100 my-20">
          <div className="hero-content flex-row lg:flex-col">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold text-center">Edit Note</h1>
            </div>
            <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-300">
              <div className="card-body">
                <form onSubmit={handleEditFormSubmit}>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Note Name:</span>
                    </label>
                    <input
                      name="note_name"
                      value={noteFormData.note_name}
                      onChange={handleEditFormChange}
                      type="text"
                      placeholder="Note Title"
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
                      onChange={handleEditFormChange}
                      placeholder="Write note here..."
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

export default EditLinkForm;