import { fetch } from '../fetch'

export const getTransactions = async () => {
    const response = await fetch.get('/transactions')
    return response.data
}
