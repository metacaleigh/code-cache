import React, { useState, useEffect, useContext } from "react";
import FoldersList from "./FoldersList";
import MainNavBar from "./MainNavBar";
import NewFolderForm from "./NewFolderForm";
import EditFolderForm from "./EditFolderForm";
import { UserContext } from "../context/user";
import { NavLink, Switch, Route, useRouteMatch } from "react-router-dom";
import Loading from "./Loading";

function FoldersPage({}) {
  const [user, setUser] = useContext(UserContext);
  const [editClicked, setEditClicked] = useState(false);
  const [errors, setErrors] = useState([]);
  const [folders, setFolders] = useState(null);
  const [showAddFolder, setShowAddFolder] = useState(false);
  const [showEditFolder, setShowEditFolder] = useState(false);
  const [folderId, setFolderId] = useState(null);
  const match = useRouteMatch();

  useEffect(() => {
    fetch("/folders")
      .then((r) => r.json())
      .then((folders) => setFolders(folders));
  }, []);

  function onFormSubmit(newFolder) {
    setFolders([...folders, newFolder]);
    setShowAddFolder(!showAddFolder);
  }

  function onFolderDelete(id) {
    setShowEditFolder(!showEditFolder);
    setEditClicked(!editClicked);

    const filteredFolders = folders.filter((f) => f.id !== id);

    fetch(`/folders/${id}`, {
      method: "DELETE",
    }).then(setFolders(filteredFolders));
  }

  function onEditFormSubmit(editedFolder) {
    fetch(`/folders/${editedFolder.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedFolder),
    })
      .then((r) => r.json())
      .then((data) =>
        setFolders(folders.map((f) => (f.id !== data.id ? f : data)))
      );
    setShowEditFolder(!showEditFolder);
    setEditClicked(!editClicked);
  }

  // console.log("folders", folders)
  // console.log("user folders", user.folders)

  if (!folders) return <Loading />;
  return (
    <>
      <MainNavBar
        editClicked={editClicked}
        setEditClicked={setEditClicked}
        showAddFolder={showAddFolder}
        setShowAddFolder={setShowAddFolder}
      />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-15 mx-auto">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mt-10 mb-2 text-gray-900">
              {user.first_name}'s Folders
            </h1>
          </div>
          {folders?.length === 0 ? (
            <div className="hero min-h-max bg-base-100">
              <div className="hero-content text-center text-base-content mt-10">
                <div className="max-w-md">
                  {showAddFolder === true ? null : (
                    <div>
                      <h1 className="text-5xl font-bold">
                        Hmm, it looks a little empty in here... Let's add your
                        first folder!
                      </h1>
                      <button
                        onClick={() => setShowAddFolder(!showAddFolder)}
                        className="btn btn-primary my-9"
                      >
                        Add a Folder
                      </button>
                    </div>
                  )}
                  {showAddFolder && (
                    <div>
                      <NewFolderForm
                        setErrors={setErrors}
                        onFormSubmit={onFormSubmit}
                        showAddFolder={showAddFolder}
                        setShowAddFolder={setShowAddFolder}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div>
                {showEditFolder && (
                  <div className="flex flex-row justify-center">
                    <EditFolderForm
                      onEditFormSubmit={onEditFormSubmit}
                      folderId={folderId}
                      onFolderDelete={onFolderDelete}
                      showEditFolder={showEditFolder}
                      setShowEditFolder={setShowEditFolder}
                    />
                  </div>
                )}
                {showAddFolder && (
                  <div className="flex flex-row justify-center">
                    <NewFolderForm
                      setErrors={setErrors}
                      onFormSubmit={onFormSubmit}
                      showAddFolder={showAddFolder}
                      setShowAddFolder={setShowAddFolder}
                    />
                  </div>
                )}
                <FoldersList
                  folders={folders}
                  editClicked={editClicked}
                  onFolderDelete={onFolderDelete}
                  showEditFolder={showEditFolder}
                  setShowEditFolder={setShowEditFolder}
                  folderId={folderId}
                  setFolderId={setFolderId}
                />
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default FoldersPage;
