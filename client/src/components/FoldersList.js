import React, { useContext } from "react";
import FolderCard from "./FolderCard";
import { UserContext } from "../context/user";

function FoldersList({ folders }) {

    const [user, setUser] = useContext(UserContext)

    const folderCards = folders?.map((f) => {
        return <FolderCard key={f.id} {...f} />
    })
    return(
        <>
            <div className="grid grid-cols-4">
                {folderCards}
            </div>
        </>
    )
}

export default FoldersList;