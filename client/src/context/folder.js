import React, { createContext, useState } from 'react';

// create context object
const FolderContext = createContext()

// create content provider (component)
function FolderProvider({ children }) {

    const [folders, setFolders] = useState([])

    const value = [folders, setFolders]

    return(
        <FolderContext.Provider value={value}>
            {children}
        </FolderContext.Provider>
    )
}

// export the context and the provider
export { FolderContext, FolderProvider }