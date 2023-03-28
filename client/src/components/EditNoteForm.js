import React, { useState, useEffect } from 'react';
import { useLocation, useParams, useRouteMatch } from "react-router-dom";

function EditLinkForm({ note, onEditNoteSubmit, onNoteDelete, showNoteEdit, setShowNoteEdit }) {

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
            <div className="card w-96 bg-base-300 shadow-xl mb-10">
            <span className="card-actions justify-end mt-2 mr-2">
          <div
            className="tooltip tooltip-bottom"
            data-tip="Delete Note"
          >
            <button
              className="btn btn-sm"
              onClick={() => onNoteDelete(note.id)}
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
            <h1 className="card-title mt-5 ml-36 text-neutral">Edit Note</h1>
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
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Tag (up to 1):</span>
                    </label>
                    <input
                      name="tag_name"
                      value={noteFormData.tag_name}
                      onChange={handleEditFormChange}
                      type="text"
                      placeholder="No spaces (i.e. #StackOverflow)"
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
                  onClick={() => setShowNoteEdit(!showNoteEdit)}
                >
                  Cancel
                </a>
              </div>
            </div>
      </>
    )
}

export default EditLinkForm;