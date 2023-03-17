import React, { useContext } from "react";
import FolderCard from "./FolderCard";
import { UserContext } from "../context/user";

function FoldersList({ folders, editClicked }) {

    const [user, setUser] = useContext(UserContext)

    const folderCards = folders?.map((f) => {
        return (
                <FolderCard key={f.id} {...f} editClicked={editClicked}/>
        )
    })
    return(
        <>
            <div className="flex flex-row flex-wrap justify-center gap-5">
                {folderCards}
            </div>
        </>
    )
}

export default FoldersList;