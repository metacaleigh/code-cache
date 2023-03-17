import React, { useState, useContext } from "react";
import FoldersList from "./FoldersList";
import MainNavBar from "./MainNavBar";
import { UserContext } from "../context/user";

function FoldersPage({ folders }) {

    const [user, setUser] = useContext(UserContext)
    const [editClicked, setEditClicked] = useState(false)

  return (
    <>
      <MainNavBar editClicked={editClicked} setEditClicked={setEditClicked}/>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-15 mx-auto">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mt-10 mb-2 text-gray-900">
              {user.first_name}'s Folders
            </h1>
          </div>
          <div>
            <div>
              <FoldersList folders={folders} editClicked={editClicked}/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FoldersPage;
