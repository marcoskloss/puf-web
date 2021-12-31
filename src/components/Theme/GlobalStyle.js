import { createGlobalStyle } from 'styled-components'
import { background, th, font } from './helpers'

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        -webkit-font-smoothing: antialiased;
    }

    html, body, #root {
        height: 100%;
    }

    body {
        ${background};
        ${font};
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
        'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
        'Helvetica Neue', sans-serif;
    }

    #root {
        display: flex;
    }

    input {
        font-size: inherit;
    }


    button {
        cursor: pointer;
    }
`
