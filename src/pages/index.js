import * as React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { useAuth } from '../modules'

import { SignUp } from './SignUp'
import { Login } from './Login'
import { Dashboard } from './Dashboard'

const PublicRoutes = () => (
    <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/signup" exact element={<SignUp />} />
    </Routes>
)

const LoggedInRoutes = () => (
    <Routes>
        <Route path="/" exact element={<Dashboard />} />
    </Routes>
)

export const App = () => {
    const [auth] = useAuth()

    return <Router>{auth.user ? <LoggedInRoutes /> : <PublicRoutes />}</Router>
}
