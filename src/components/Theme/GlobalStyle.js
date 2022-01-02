import { createGlobalStyle } from 'styled-components'
import { background, font } from './helpers'

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;700&display=swap');

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        -webkit-font-smoothing: antialiased;
        font-family: Manrope, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
        'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
        'Helvetica Neue', sans-serif;
    }

    html, body, #root {
        height: 100%;
    }

    body {
        ${background};
        ${font};
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
