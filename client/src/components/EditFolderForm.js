import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../context/user";
import { ErrorContext } from "../context/error";
import { useHistory, useParams } from "react-router-dom";

function EditFolderForm({
  onEditFormSubmit,
  folderId,
  onFolderDelete,
  showEditFolder,
  setShowEditFolder,
}) {
  // const {id} = useParams()
  // console.log(id)
  const [editFolder, setEditFolder] = useState({});
  const [formData, setFormData] = useState(null);
  const history = useHistory();

  useEffect(() => {
    fetch(`/folders/${folderId}`)
      .then((r) => r.json())
      .then((folder) => {
        setEditFolder(folder);
        setFormData({
          name: folder.name,
          description: folder.description,
          image_url: folder.image_url,
          folder_color: folder.folder_color,
        });
      });
  }, [folderId]);

  const editFolderColors = [
    {
      color: "Pink",
      className: "card w-96 h-40 bg-primary text-gray-900 my-1",
    },
    {
      color: "Purple",
      className: "card w-96 h-40 bg-secondary text-gray-900 my-1",
    },
    {
      color: "Orange",
      className: "card w-96 h-40 bg-accent text-gray-900 my-1",
    },
    {
      color: "Yellow",
      className: "card w-96 h-40 bg-warning text-gray-900 my-1",
    },
    {
      color: "Blue",
      className: "card w-96 h-40 bg-info text-gray-900 my-1",
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
      id: folderId,
    });
    history.push("/");
  }

  if (!formData) return null;
  return (
    <>
      <div className="card w-96 bg-base-300 shadow-xl mb-10">
        <span className="card-actions justify-end mt-2 mr-2">
          <div
            className="tooltip tooltip-bottom"
            data-tip="Delete Folder"
          >
            <button
              className="btn btn-sm"
              onClick={() => onFolderDelete(folderId)}
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
        <h1 className="card-title mt-5 ml-36">Edit Folder</h1>
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
          <a
            className="link link-primary m"
            onClick={() => setShowEditFolder(!showEditFolder)}
          >
            Cancel
          </a>
        </div>
      </div>
    </>
  );
}

export default EditFolderForm;
