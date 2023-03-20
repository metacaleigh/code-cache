import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from "../context/user"


function SignInForm({ setErrors }){

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
    <div className="card w-96 bg-base-300 text-neutral-content shadow-2xl">
    <div className="card-body items-center text-cente text-gray-900">
        <h2 className="card-title">User Login</h2>
        <form onSubmit={handleSubmit}>
            <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Username" className="input input-bordered input-primary w-full max-w-xs my-3" />
            <input value={password} onChange={(e) => setPassword(e.target.value)}type="text" placeholder="Password" className="input input-bordered input-primary w-full max-w-xs" />
        <div className="card-actions justify-center">
            <button className="btn btn-primary my-3">Login</button>
        </div>
        </form>
    </div>
    </div>
    )
}

export default SignInForm;