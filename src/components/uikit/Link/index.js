import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'

import { font } from '~/components/Theme/helpers'

export const Link = styled(RouterLink)`
    text-decoration: none;
    ${font}
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`
