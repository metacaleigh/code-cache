import React, { useState } from "react";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import ErrorMsg from "./ErrorMsg";

function SignInPage({ errors, setErrors }) {
  const [showLogin, setShowLogin] = useState(true);
  // const [errors, setErrors] = useState([])

  return (
    <>
      <div className="hero min-h-2/4">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            {/* <button className="btn btn-primary">Get Started</button> */}
          </div>
        </div>
      </div>
      <div>
        <div className="card-body items-center text-center text-neutral-content">
          {showLogin ? (
            <>
              <SignInForm setErrors={setErrors} />
              <h2 className="card-title">Not a user? Sign up!</h2>
              <button
                class="btn btn-primary btn-outline"
                onClick={() => setShowLogin(!showLogin)}
              >
                Create an Account
              </button>
            </>
          ) : (
            <>
              <SignUpForm setErrors={setErrors} />
              <button
                class="btn btn-primary btn-outline"
                onClick={() => setShowLogin(!showLogin)}
              >
                Show Login
              </button>
            </>
          )}
          <ErrorMsg errors={errors} />
        </div>
      </div>
    </>
  );
}

export default SignInPage;
