import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../context/user";
import { ErrorContext } from "../context/error";
import { useHistory, useParams } from "react-router-dom";

function EditFolderForm({ onEditFormSubmit }) {
    
    const {id} = useParams()
    console.log(id)
    const [editFolder, setEditFolder] = useState({})
    const [formData, setFormData] = useState(null)
    const history = useHistory()

    useEffect(() => {
        fetch(`/folders/${id}`)
            .then(r => r.json())
            .then((folder) => {
                setEditFolder(folder)
                setFormData({
                    name: folder.name,
                    description: folder.description,
                    image_url: folder.image_url,
                    folder_color: folder.folder_color
                })
            })
    }, [id])

    const editFolderColors = [
      {
        color: "Pink",
        className: "card w-96 bg-primary text-gray-900 my-1",
      },
      {
        color: "Purple",
        className: "card w-96 bg-secondary text-gray-900 my-1",
      },
      {
        color: "Orange",
        className: "card w-96 bg-accent text-gray-900 my-1",
      },
      {
        color: "Yellow",
        className: "card w-96 bg-warning text-gray-900 my-1",
      },
      {
        color: "Blue", 
        className: "card w-96 bg-info text-gray-900 my-1" 
      },
    ];

    function handleEditFormChange(e) {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    function handleEditFormSubmit(e) {
        e.preventDefault();
        onEditFormSubmit({
            ...formData,
            id: id
        })
        history.push("/")
    }


    if (!formData) return null;
    return (
<>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-row lg:flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Edit {formData.name} Folder</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-300">
            <div className="card-body">
              <form onSubmit={handleEditFormSubmit}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Folder Name:</span>
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Folder Name"
                    className="input input-bordered input-primary w-full max-w-xs"
                    value={formData.name}
                    onChange={handleEditFormChange}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Description:</span>
                  </label>
                  <textarea
                    name="description"
                    placeholder="Description (Optional)"
                    class="textarea textarea-bordered textarea-primary textarea-s w-full max-w-xs"
                    onChange={handleEditFormChange}
                    value={formData.description}
                  ></textarea>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Folder Color:</span>
                  </label>
                  <select
                    className="select select-primary w-full max-w-xs"
                    value={formData.folder_color}
                    name="folder_color"
                    onChange={handleEditFormChange}
                  >
                    <option disabled selected>
                      Choose a Folder Color...
                    </option>
                    {editFolderColors.map((fc) => {
                      return (
                        <option key={fc.color} value={fc.className}>
                          {fc.color}
                        </option>
                      );
                    })}
                  </select>
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

export default EditFolderForm;