import React, { useState } from "react";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import ErrorMsg from "./ErrorMsg";

function SignInPage({ errors, setErrors }) {
    const [showLogin, setShowLogin] = useState(true)
    // const [errors, setErrors] = useState([])

    return(
    <div>
    <div className="card-body items-center text-center">
        <h2 className="card-title">{showLogin === true ? "Already a Member?" : null }</h2>
        {showLogin ? 
        <>
            <SignInForm setErrors={setErrors}/>
            <button class="btn btn-info" onClick={() => setShowLogin(!showLogin)}>Show Sign Up</button>
        </> :
        <>
            <SignUpForm setErrors={setErrors}/>
            <button class="btn btn-info" onClick={() => setShowLogin(!showLogin)}>Show Log In</button>
        </>
        }
        <ErrorMsg errors={errors}/>
    </div>
    </div>
    )
}

export default SignInPage;