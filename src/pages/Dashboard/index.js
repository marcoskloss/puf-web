import * as React from 'react'
import { useAuth } from '~/modules'

export const Dashboard = () => {
    const [user, { logout }] = useAuth()

    return (
        <div>
            <button onClick={logout}>sair</button>
            <div>olá {user.name}</div>
        </div>
    )
}
