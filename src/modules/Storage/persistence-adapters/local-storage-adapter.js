const AUTH_KEY = '@puf:auth'

export const localStorageAdapter = {
    getItem: () => {
        return window.localStorage.getItem(AUTH_KEY)
    },

    setItem: value => {
        window.localStorage.setItem(AUTH_KEY, value && JSON.stringify(value))
    },

    clear: () => window.localStorage.clear(),
}
