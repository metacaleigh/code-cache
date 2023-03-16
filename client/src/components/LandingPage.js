import React from "react";
import SignInPage from "./SignInPage";

function LandingPage({ errors, setErrors }) {
    return(
        <div>
            <SignInPage errors={errors} setErrors={setErrors}/>
        </div>
    )
}

export default LandingPage;