import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext()
export const AuthContextProvider = ({children})=>{
    const [currentUser, setcurrentUser] = useState(
        JSON.parse(localStorage.getItem('user')) || null
    )

    const login = (payload) =>{
        setcurrentUser(payload)
    }

    useEffect(() => {
        if(currentUser){
            localStorage.setItem("user", JSON.stringify(currentUser))
        }
    }, [currentUser])
    
    return(
        <AuthContext.Provider value={{currentUser,login}}>{children}</AuthContext.Provider>
    )
}
