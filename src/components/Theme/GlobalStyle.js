import { createGlobalStyle } from 'styled-components'
import { background, color, th } from './helpers'

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
        ${color};
        font-size: ${th.size(3)}px;
    }

    #root {
        display: flex;
    }

    input {
        font-size: inherit;
    }
`
