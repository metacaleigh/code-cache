import React, { useState, useContext } from 'react';
import { UserContext } from "../context/user";

function SignUpForm({ setErrors }){
    
    const initialSignUpData = {
        first_name: "",
        last_name: "",
        email: "",
        username: "",
        password: "",
        password_confirmation: ""
    }

    const [user, setUser] = useContext(UserContext)
    const [formData, setFormData] = useState(initialSignUpData)

    function handleFormChange(e) {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value})
    }

    function handleFormSubmit (e) {
        e.preventDefault();
    
        fetch("/signup", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
            })
            .then(res => {
                if (res.ok){
                    res.json().then(user => setUser(user))
                } else {
                    res.json().then(errors => setErrors(errors.errors))
                }
            })
            .then(setFormData(initialSignUpData))
    }


    return(
        <div class="card w-96 bg-base-300 text-gray-900 shadow-2xl">
        <div class="card-body items-center text-center">
            <h2 class="card-title my-2">Sign Up Here:</h2>
            <form onSubmit={handleFormSubmit}>
                <input name="first_name" type="text" placeholder="First Name"
                value={formData.first_name} class="input input-bordered input-primary w-full max-w-xs" onChange={handleFormChange}/>
                <input name="last_name" type="text" placeholder="Last Name" value={formData.last_name} class="input input-bordered input-primary w-full max-w-xs my-3" onChange={handleFormChange}/>
                <input name="email" type="text" placeholder="Email" value={formData.email} class="input input-bordered input-primary w-full max-w-xs" onChange={handleFormChange}/>
                <input name="username" type="text" placeholder="Username" value={formData.username} class="input input-bordered input-primary w-full max-w-xs my-3" onChange={handleFormChange}/>
                <input name="password" type="text" placeholder="Password" value={formData.password} class="input input-bordered input-primary w-full max-w-xs" onChange={handleFormChange}/>
                <input name="password_confirmation" type="text" placeholder="Password Confirmation" value={formData.password_confirmation} class="input input-bordered input-primary w-full max-w-xs my-3" onChange={handleFormChange}/>
                <div class="card-actions justify-center">
                    <button class="btn btn-primary" type="submit">Sign Up</button>
                </div>
            </form>
        </div>
        </div>
    )
}

export default SignUpForm;