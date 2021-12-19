import { createGlobalStyle } from 'styled-components'
import { background, color } from './helpers'

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        -webkit-font-smoothing: antialiased;
    }

    body {
        ${background};
        ${color};
    }
`
