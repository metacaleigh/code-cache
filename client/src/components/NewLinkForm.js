import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import ErrorMsg from "./ErrorMsg";

function NewLinkForm({
  onLinkFormSubmit,
  folderId,
  onResourceCreation,
  showAddLink,
  setShowAddLink,
}) {
  const initialLinkData = {
    link_name: "",
    link_url: "",
    description: "",
    is_starred: false,
    tag_name: ""
  };

  const history = useHistory();
  const [linkFormData, setLinkFormData] = useState(initialLinkData);
  const [errors, setErrors] = useState([]);

  // console.log("folder ID", folderId)

  function handleFormChange(e) {
    const { name, value } = e.target;
    setLinkFormData({ ...linkFormData, [name]: value });
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    console.log("CONSOLE LOG - HANDLE FORM SUBMIT");
    fetch("/links", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...linkFormData, is_starred: false }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((newLink) => {
          onLinkFormSubmit(newLink);
          handleResourceCreation(newLink);
          setLinkFormData({});
          // history.push(`/folders/${folderId}/links`);
        });
      } else {
        r.json().then((err) => setErrors(err?.errors));
      }
    });
    setShowAddLink(!showAddLink);
  }

  function handleResourceCreation(newLink) {
    const newResourceBody = {
      folder_id: folderId,
      resourceable_id: newLink.id,
      resourceable_type: "Link",
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
          // history.push(`/folders/${folderId}/links`);
          // history.push("/");
        });
      } else {
        r.json().then((err) => setErrors(err?.errors));
      }
    });
  }

  return (
    <>
      <div className="card w-96 bg-base-300 shadow-xl mb-10">
        <h1 className="card-title mt-5 ml-36 text-neutral">New Link</h1>
        <div className="card-body">
          <form onSubmit={handleFormSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Link Name:</span>
              </label>
              <input
                name="link_name"
                value={linkFormData.link_name}
                onChange={handleFormChange}
                type="text"
                placeholder="Link Name"
                className="input input-bordered input-primary w-full max-w-xs"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Link URL:</span>
              </label>
              <input
                name="link_url"
                value={linkFormData.link_url}
                onChange={handleFormChange}
                type="text"
                placeholder="Link URL"
                className="input input-bordered input-primary w-full max-w-xs"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description:</span>
              </label>
              <textarea
                name="description"
                value={linkFormData.description}
                onChange={handleFormChange}
                placeholder="Description (Optional)"
                class="textarea textarea-bordered textarea-primary textarea-s w-full max-w-xs"
              ></textarea>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Add a Tag (up to 1):</span>
              </label>
              <input
                name="tag_name"
                value={linkFormData.tag_name}
                onChange={handleFormChange}
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
            onClick={() => setShowAddLink(!showAddLink)}
          >
            Cancel
          </a>
        </div>
        <ErrorMsg errors={errors} />
      </div>
    </>
  );
}

export default NewLinkForm;
