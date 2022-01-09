import * as React from 'react'
import { useAuth } from '~/modules'

export const Dashboard = () => {
    const [auth, { logout }] = useAuth()

    return (
        <div>
            <button onClick={logout}>sair</button>
            <div>olá {auth.user.name}</div>
        </div>
    )
}
