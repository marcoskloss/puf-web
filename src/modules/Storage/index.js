import * as React from 'react'
import { createContext, useState, useContext, useEffect } from 'react'

const MemoryStorageContext = createContext([{}, () => ({})])

export const MemoryStorageProvider = ({ children, initialState = {} }) => {
    const [state, setState] = useState(initialState)

    return (
        <MemoryStorageContext.Provider value={[state, setState]}>
            {children}
        </MemoryStorageContext.Provider>
    )
}

export const PersistenceProvider = ({ children, persistenceAdapter }) => {
    const [state, setState] = useContext(MemoryStorageContext)

    useEffect(() => {
        const getItem = async () => {
            const result = await persistenceAdapter.getItem()
            setState({ ...result, rehydrated: true })
        }

        getItem()
    }, [persistenceAdapter, setState])

    useEffect(() => {
        if (state?.rehydrated) {
            persistenceAdapter.setItem(state)
        }
    }, [state, persistenceAdapter])

    return children
}

export const StorageProvider = ({ persistenceAdapter, children }) => {
    const initialState = { rehydrated: false }

    return (
        <MemoryStorageProvider initialState={initialState}>
            <PersistenceProvider persistenceAdapter={persistenceAdapter}>
                {children}
            </PersistenceProvider>
        </MemoryStorageProvider>
    )
}

export const useStorage = () => {
    const [state, setState] = useContext(MemoryStorageContext)
    return [state, setState]
}
