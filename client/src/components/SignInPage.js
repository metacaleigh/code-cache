import React, { useState } from "react";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import ErrorMsg from "./ErrorMsg";
import CClogolarge from "../CClogolarge.png";

function SignInPage({ errors, setErrors }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <>
      <div className="hero min-h-2/4">
        <div className="hero-overlay bg-base-100 bg-opacity-60"></div>
        <div className="hero-content text-center text-primary">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hi there!</h1>
            <h1 className="mb-5 text-5xl font-bold">Welcome to</h1>
            {/* <h1 className="mb-5 text-5xl font-bold">Welcome to</h1> */}
            <img src={CClogolarge} alt="code/cache logo"/>
            <p className="my-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            {/* <button className="btn btn-primary">Get Started</button> */}
          </div>
        </div>
      </div>
      <div>
        <div className="card-body items-center text-center text-base-content">
          {showLogin ? (
            <>
              <SignInForm setErrors={setErrors} />
              <h2 className="card-title">Not a user? Sign up!</h2>
              <button
                className="btn btn-primary btn-outline"
                onClick={() => setShowLogin(!showLogin)}
              >
                Create an Account
              </button>
            </>
          ) : (
            <>
              <SignUpForm setErrors={setErrors} />
              <button
                className="btn btn-primary btn-outline"
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
