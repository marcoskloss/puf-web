import styled from 'styled-components'
import { font } from '~/components/Theme/helpers'

export const Link = styled('a')`
    text-decoration: none;
    ${font}
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`
