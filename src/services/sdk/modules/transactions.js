import { fetch } from '../fetch'

export const getTransaction = async ({ token }) => {
    const res = await fetch.get('/transactions', {
        headers: { Authorization: `Bearer ${token}` },
    })
    return res.data
}
