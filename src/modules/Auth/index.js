import { useStorage } from '../Storage'

export const useAuth = () => {
    const [state, setState] = useStorage()

    const logout = () => {
        setState(prevState => ({ ...prevState, auth: {} }))
    }

    const login = auth => {
        setState(prevState => {
            return { ...prevState, auth, rehydrated: true }
        })
    }

    return [state?.auth || {}, { login, logout }]
}
