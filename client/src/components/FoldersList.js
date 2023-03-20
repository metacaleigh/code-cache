import React, { useContext } from "react";
import FolderCard from "./FolderCard";
import { UserContext } from "../context/user";

function FoldersList({ folders, editClicked, onFolderDelete }) {

    const [user, setUser] = useContext(UserContext)

    const folderCards = folders?.map((f, index) => {
        return (
                <FolderCard key={f.id} index={index} {...f} editClicked={editClicked} onFolderDelete={onFolderDelete}/>
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