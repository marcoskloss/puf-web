import * as React from 'react'
import {
    createContext,
    useState,
    useContext,
    useEffect,
    useCallback,
} from 'react'

const MemoryStorageContext = createContext([{}, () => ({})])

export const MemoryStorageProvider = ({ children, initialState = {} }) => {
    const [state, setState] = useState(initialState)

    return (
        <MemoryStorageContext.Provider value={[state, setState]}>
            {children}
        </MemoryStorageContext.Provider>
    )
}

export const PersistenceProvider = ({
    onRehydrate,
    children,
    persistenceAdapter,
}) => {
    const [state, setState] = useContext(MemoryStorageContext)

    const rehydrate = useCallback(async () => {
        const result = await persistenceAdapter.getItem()
        const data = await onRehydrate(result)
        setState({ ...data, rehydrated: true })
    }, [onRehydrate, persistenceAdapter, setState])

    useEffect(() => {
        rehydrate()
    }, [rehydrate])

    useEffect(() => {
        if (state?.rehydrated) {
            persistenceAdapter.setItem(state)
        }
    }, [state, persistenceAdapter])

    return children
}

export const StorageProvider = ({
    onRehydrate,
    persistenceAdapter,
    children,
}) => {
    const initialState = { rehydrated: false }

    return (
        <MemoryStorageProvider initialState={initialState}>
            <PersistenceProvider
                persistenceAdapter={persistenceAdapter}
                onRehydrate={onRehydrate}
            >
                {children}
            </PersistenceProvider>
        </MemoryStorageProvider>
    )
}

export const useStorage = () => {
    const [state, setState] = useContext(MemoryStorageContext)
    return [state, setState]
}
