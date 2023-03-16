import React, { useContext } from "react";
import FolderCard from "./FolderCard";
import { UserContext } from "../context/user";

function FoldersList({ folders }) {

    const [user, setUser] = useContext(UserContext)

    const folderCards = folders?.map((f) => {
        return (
            <div className="grid grid-cols-4">
                <FolderCard key={f.id} {...f} />
            </div>
        )
    })
    return(
        <>
            <div>
                {folderCards}
            </div>
        </>
    )
}

export default FoldersList;