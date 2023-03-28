import React, { useState, useEffect } from 'react';
import { useLocation, useParams, useRouteMatch } from "react-router-dom";

function EditLinkForm({ link, onEditLinkSubmit, onLinkDelete, showLinkEdit, setShowLinkEdit }) {

    const {id} = useParams()
    console.log(id)
    // const [editLink, setEditLink] = useState({})
    const [linkFormData, setLinkFormData] = useState({})
    const location = useLocation()
    const match = useRouteMatch()
    // console.log(match)
    // console.log(location)

    useEffect(() => {
        setLinkFormData({
            link_name: link.link_name,
            link_url: link.link_url,
            description: link.description
            // tag_name: link.tags[0].tag_name
        })
    }, [])

    // console.log(linkFormData)

    function handleEditFormChange(e) {
        const { name, value } = e.target;
        setLinkFormData({ ...linkFormData, [name]: value });
    }

    function handleEditFormSubmit(e) {
        e.preventDefault();
        onEditLinkSubmit(link.id, linkFormData)
    }

    if (!linkFormData) return null;
    return(
<>
            <div className="card w-96 bg-base-300 shadow-xl mb-10">
            <span className="card-actions justify-end mt-2 mr-2">
          <div
            className="tooltip tooltip-bottom"
            data-tip="Delete Link"
          >
            <button
              className="btn btn-sm"
              onClick={() => onLinkDelete(link.id)}
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
            <h1 className="card-title mt-5 ml-36 text-neutral">Edit Link</h1>
              <div className="card-body">
                <form onSubmit={handleEditFormSubmit}>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Link Name:</span>
                    </label>
                    <input
                      name="link_name"
                      value={linkFormData.link_name}
                      onChange={handleEditFormChange}
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
                      onChange={handleEditFormChange}
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
                      onChange={handleEditFormChange}
                      placeholder="Description (Optional)"
                      class="textarea textarea-bordered textarea-primary textarea-s w-full max-w-xs"
                    ></textarea>
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Tag (up to 1):</span>
                    </label>
                    <input
                      name="tag_name"
                      value={linkFormData.tag_name}
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
                  onClick={() => setShowLinkEdit(!showLinkEdit)}
                >
                  Cancel
                </a>
              </div>
            </div>
      </>
    )
}

export default EditLinkForm;