import * as React from 'react'
import { useState, useEffect, createContext, useContext } from 'react'

const AuthContext = createContext([])

export const useAuth = () => {
    const [state, setState] = useContext(AuthContext)

    function logout() {
        setState(false)
    }

    return [state, { login: setState, logout }]
}

export const AuthProvider = ({ children }) => {
    const [state, setState] = useState(() => {
        const data = window.localStorage.getItem('@puf:auth')
        return data && JSON.parse(data)
    })

    useEffect(() => {
        window.localStorage.setItem('@puf:auth', state && JSON.stringify(state))
    }, [state])

    return (
        <AuthContext.Provider value={[state, setState]}>
            {children}
        </AuthContext.Provider>
    )
}
