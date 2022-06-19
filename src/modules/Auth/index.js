import { useStorage } from '../../modules/Storage'
import { setToken } from '../../services/sdk/fetch'

export const onRehydrateAuthMiddleware = persistedData => {
    if (persistedData?.auth?.token) {
        setToken(persistedData.auth.token)
    }
    return Promise.resolve(persistedData)
}

export const useAuth = () => {
    const [state, setState] = useStorage()

    const logout = () => {
        setState(prevState => ({ ...prevState, auth: {} }))
        setToken('')
    }

    const login = auth => {
        setState(prevState => {
            return { ...prevState, auth, rehydrated: true }
        })
        setToken(auth.token)
    }

    return [state?.auth || {}, { login, logout }]
}
