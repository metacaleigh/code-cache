import React, { createContext, useState } from 'react';

// create context object
const UserContext = createContext()

// create content provider (component)
function UserProvider({ children }) {

    const [user, setUser] = useState(null)

    const value = [user, setUser]

    return(
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

// export the context and the provider
export { UserContext, UserProvider }