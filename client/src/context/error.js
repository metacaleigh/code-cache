import React, { createContext, useState } from 'react';

// create context object
const ErrorContext = createContext()

// create content provider (component)
function ErrorProvider({ children }) {

    const [error, setError] = useState([])

    const value = [error, setError]

    return(
        <ErrorContext.Provider value={value}>
            {children}
        </ErrorContext.Provider>
    )
}

// export the context and the provider
export { ErrorContext, ErrorProvider };