import { createContext, useState} from "react";

const defaultUser = {
    username:'Admin'
}
// Create a context
export const UserContext = createContext(defaultUser);

export const UserProvider = ({children}) => {
    const [user, setUser] = useState(defaultUser);
    return(
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}