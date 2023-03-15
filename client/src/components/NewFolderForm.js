import React, { useState, useContext } from "react";
import { UserContext } from "../context/user";
import { useHistory } from "react-router-dom";

function NewFolderForm({ onFormSubmit }){

    let history = useHistory()

    function exitForm() {
        history.push("/")
    }

    const [user, setUser] = useContext(UserContext)

    // const initialFolderData = {
    //     user_id: user.id,
    //     name: "",
    //     description: "",
    //     image_url: ""
    // }

    const [formData, setFormData] = useState({})

    function handleFormChange(e) {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value})
    }

    function handleFormSubmit(e) {
        e.preventDefault()

        fetch("/folders", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({...formData, user_id: user.id})
          })
          .then((r)=> {
            if(r.ok){
                r.json().then(newFolder => {
                    onFormSubmit(newFolder)
                    setFormData({})
                    history.push("/")
                })
            } else {
                // r.json().then(err => setErrors(err.errors))
            }
        })
    }

    return(
        <>
        <div className="card w-96 bg-primary shadow-xl">
        <div className="card-body">
            <div className="card-actions justify-end">
            <span><h1 className="card-title">Create a New Folder</h1></span>
            <button className="btn btn-square btn-sm" onClick={exitForm}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            </div>
            <form onSubmit={handleFormSubmit}>
            <input name="name" value={formData.name} onChange={handleFormChange} type="text" placeholder="Folder Name" className="input input-bordered input-primary w-full max-w-xs" />
            <textarea name="description" value={formData.description} onChange={handleFormChange} placeholder="Description (Optional)" class="textarea textarea-bordered textarea-xs w-full max-w-xs"></textarea>
            <input name="image_url" value={formData.image_url} onChange={handleFormChange} type="text" placeholder="Image URL (Optional)" className="input input-bordered input-primary w-full max-w-xs"/>
            <button type="submit" className="btn btn-active btn-secondary">Submit</button>
            </form>
        </div>
        </div>
        </>
    )
}

export default NewFolderForm;