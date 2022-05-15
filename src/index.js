import * as React from 'react'
import ReactDOM from 'react-dom'

import { Theme } from './components'
import { StorageProvider } from './modules'
import { localStorageAdapter } from './modules/Storage/persistence-adapters/local-storage-adapter'

import reportWebVitals from './reportWebVitals'
import { App } from './pages'

ReactDOM.render(
    <React.StrictMode>
        <Theme>
            <StorageProvider persistenceAdapter={localStorageAdapter}>
                <App />
            </StorageProvider>
        </Theme>
    </React.StrictMode>,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
