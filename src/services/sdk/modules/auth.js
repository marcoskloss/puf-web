import { fetch } from '../fetch'

export const login = async ({ password, username }) => {
    const response = await fetch.get('/login', {
        auth: { password, username },
    })

    return response.data
}
