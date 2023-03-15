import React, { useState } from "react";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import ErrorMsg from "./ErrorMsg";

function SignInPage({ }) {
    const [showLogin, setShowLogin] = useState(true)
    const [errors, setErrors] = useState([])

    return(
    <div>
    <div className="card-body items-center text-center">
        <h2 className="card-title">Already a Member?</h2>
        {showLogin ? 
        <>
            <SignInForm setErrors={setErrors}/>
            <button class="btn btn-primary" onClick={() => setShowLogin(!showLogin)}>Show Sign Up</button>
        </> :
        <>
            <SignUpForm setErrors={setErrors}/>
            <button class="btn btn-primary" onClick={() => setShowLogin(!showLogin)}>Show Log In</button>
        </>
        }
        <ErrorMsg />
    </div>
    </div>
    )
}

export default SignInPage;