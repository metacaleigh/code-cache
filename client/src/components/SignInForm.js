import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from "../context/user"


function SignInForm({ setErrors }){

    // const initialLoginData = {
    //     username: "",
    //     password: ""
    // }

    // const [formData, setFormData] = useState(initialLoginData);

    const [user, setUser] = useContext(UserContext)
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory()

    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        }).then((r) => {
          setIsLoading(false);
          if (r.ok) {
            r.json().then((user) => setUser(user)).then(()=>history.push('/'));
          } else {
            r.json().then((err) => setErrors(err.errors));
          }
        });
      }

    return(
    <div class="card w-96 bg-neutral text-neutral-content">
    <div class="card-body items-center text-center">
        <h2 class="card-title">Sign In Here:</h2>
        <form onSubmit={handleSubmit}>
            <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Username" class="input input-bordered input-primary w-full max-w-xs" />
            <input value={password} onChange={(e) => setPassword(e.target.value)}type="text" placeholder="Password" class="input input-bordered input-primary w-full max-w-xs" />
        <div class="card-actions justify-center">
            <button class="btn btn-primary">Login</button>
        </div>
        </form>
    </div>
    </div>
    )
}

export default SignInForm;