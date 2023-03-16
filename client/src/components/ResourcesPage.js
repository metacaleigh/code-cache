import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import ResourcesNavBar from './ResourcesNavBar';

function ResourcesPage() {

    const {id} = useParams();
    console.log(id);
    const [folderContent, setFolderContent] = useState({})

    useEffect(() => {
        fetch(`/folders/${id}`)
            .then(r => r.json())
            .then(f => setFolderContent(f))
    }, [])

    console.log(folderContent);

    return(
        <>
            <ResourcesNavBar/>
            {folderContent.length === 0 ? 
            <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
              <div className="max-w-md">
                <h1 className="text-5xl font-bold py-6">Hmm, it looks a little empty in here...</h1>
                <button className="btn btn-info">Add a Resource</button>
              </div>
            </div>
          </div>
            :
            <h1>FULL FOLDER</h1>}
        </>
    )
}

export default ResourcesPage;