import React from "react";
import aboutus1 from "../aboutus1.png";
import aboutus2 from "../aboutus2.png";
import aboutus3 from "../aboutus3.png";
import { useHistory } from "react-router-dom";

function AboutUs() {

    const history = useHistory();

    function goHome() {
        history.push('/')
    }

  return (
    <>
      <button className="btn btn-circle bg-primary mx-5 my-5" onClick={goHome}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#292a37"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 9v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9" />
          <path d="M9 22V12h6v10M2 10.6L12 2l10 8.6" />
        </svg>
      </button>
      <img src={aboutus1} alt="about us graphic" />
      <img src={aboutus2} alt="about us graphic" />
      <img src={aboutus3} alt="about us graphic" />
    </>
  );
}

export default AboutUs;
