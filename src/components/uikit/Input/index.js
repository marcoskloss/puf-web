import styled from 'styled-components'

import { th } from '~/components/Theme/helpers'

export const Input = styled('input')`
    background: transparent;
    border: 1px solid #fff;
    border-radius: 200px;
    color: ${th.color('white')};
    height: 45px;
    padding: 0 ${th.space(1)}px;
`
