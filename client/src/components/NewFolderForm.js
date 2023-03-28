import React, { useState, useContext } from "react";
import { UserContext } from "../context/user";
import { ErrorContext } from "../context/error";
import { useHistory } from "react-router-dom";
import ErrorMsg from "./ErrorMsg";

function NewFolderForm({ onFormSubmit, showAddFolder, setShowAddFolder }) {
  let history = useHistory();

  function exitForm() {
    history.push("/");
  }

  const [user, setUser] = useContext(UserContext);
  const [errors, setErrors] = useState([]);
  const [formData, setFormData] = useState({});

  function handleFormChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const folderColors = [
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
    className: "card w-96 h-40 bg-info text-gray-900 my-1" 
    },
  ];

  function handleFormSubmit(e) {
    e.preventDefault();

    fetch("/folders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...formData, user_id: user.id }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((newFolder) => {
          onFormSubmit(newFolder);
          setFormData({});
          history.push("/");
        });
      } else {
        r.json().then((err) => setErrors(err?.errors));
      }
    });
  }

  return (
    <>
          <div className="card w-96 bg-base-300 shadow-xl mb-10">
          <h1 className="card-title mt-5 ml-36">New Folder</h1>
            <div className="card-body">
              <form onSubmit={handleFormSubmit}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Folder Name:</span>
                  </label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    type="text"
                    placeholder="Folder Name"
                    className="input input-bordered input-primary w-full max-w-xs"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Description:</span>
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleFormChange}
                    placeholder="Description (Optional)"
                    class="textarea textarea-bordered textarea-primary textarea-s w-full max-w-xs"
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
                    onChange={handleFormChange}
                  >
                    <option disabled selected>
                      Choose a Folder Color...
                    </option>
                    {folderColors.map((fc) => {
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
            onClick={() => setShowAddFolder(!showAddFolder)}
          >
            Cancel
          </a>
            </div>
            <ErrorMsg errors={errors}/>
          </div>
    </>
  );
}

export default NewFolderForm;
