import React from "react";

function LogOutButton({ handleLogOutClick }) {
    return(
        <>
        <button className="btn" onClick={handleLogOutClick}>Log Out</button>
        </>
    )
}

export default LogOutButton;