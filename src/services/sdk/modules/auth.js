import { fetch } from '../fetch'

export const login = async ({ password, username }) => {
    const response = await fetch.get('/login', {
        auth: { password, username },
    })

    return response.data
}

export const signup = async ({ name, email, password }) => {
    const response = await fetch.post('/signup', {
        name,
        email,
        password,
    })
    return response.data
}
