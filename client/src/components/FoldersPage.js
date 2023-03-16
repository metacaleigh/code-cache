import React, { useContext } from "react";
import FoldersList from "./FoldersList";
import MainNavBar from "./MainNavBar";
import { UserContext } from "../context/user";

function FoldersPage({ folders }) {

    const [user, setUser] = useContext(UserContext)

  return (
    <>
      <MainNavBar />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-15 mx-auto">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              {user.first_name}'s Folders
            </h1>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <FoldersList folders={folders} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FoldersPage;
