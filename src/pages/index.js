import * as React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

import { Theme } from '~/components'

// import { SignUp } from './SignUp'
import { Login } from './Login'

const Page = ({ onLogout }) => {
    return (
        <div>
            <button onClick={onLogout}>sair</button>
            <div>Eu estou dentro ;D</div>
        </div>
    )
}

export const App = () => {
    const [state, setState] = useState(() => {
        const data = window.localStorage.getItem('@puf:auth')
        return data && JSON.parse(data)
    })

    function logout() {
        setState(false)
    }

    useEffect(() => {
        window.localStorage.setItem('@puf:auth', state && JSON.stringify(state))
    }, [state])

    return (
        <Theme>
            {state.user ? (
                <Page onLogout={logout} />
            ) : (
                <Login onSuccess={setState} />
            )}
        </Theme>
    )
}
