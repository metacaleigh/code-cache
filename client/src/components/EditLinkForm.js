import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from "react-router-dom";

function EditLinkForm({ onEditLinkSubmit }) {

    const {id} = useParams()
    console.log(id)
    const [editLink, setEditLink] = useState({})
    const [linkFormData, setLinkFormData] = useState(null)
    const location = useLocation()
    console.log(location)

    useEffect(() => {
        fetch(`/links/${id}`)
            .then(r => r.json())
            .then((link) => {
                setEditLink(link)
                setLinkFormData({
                    link_name: link.link_name,
                    link_url: link.link_url,
                    description: link.description
                })
            })
    }, [id])

    function handleEditFormChange(e) {
        const { name, value } = e.target;
        setLinkFormData({ ...linkFormData, [name]: value });
    }

    function handleEditFormSubmit(e) {
        e.preventDefault();
        onEditLinkSubmit({
            ...linkFormData,
            id: id
        })
    }

    if (!linkFormData) return null;
    return(
<>
        <div className="hero min-h-screen bg-base-100">
          <div className="hero-content flex-row lg:flex-col">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold text-center">Edit Link</h1>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-200">
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