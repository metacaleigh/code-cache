import React from "react";

function LogOutButton({ handleLogOutClick }) {
    return(
        <>
        <button className="btn bg-gray-900" onClick={handleLogOutClick}>Log Out</button>
        </>
    )
}

export default LogOutButton;