import { createContext, useContext, useState } from "react";
import { firebaseLogin, firebaseLogout } from "../firebase/auth";

const AuthContext = createContext()

function AuthProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    async function login(email, pswd) {
        await firebaseLogin(email, pswd)
        setIsAuthenticated(true)
    }

    async function logout() {
        await firebaseLogout()
        setIsAuthenticated(false)
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    return useContext(AuthContext)
}

export {
    AuthProvider,
    useAuth
}