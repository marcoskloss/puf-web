import * as React from 'react'
import styled from 'styled-components'

import { th, margin } from '~/components/Theme/helpers'
import { Spinner } from '~/components'

const StyledButton = styled('button')`
    background: ${th.color('white')};
    border: none;
    border-radius: 200px;
    color: ${th.color('black')};
    padding: ${th.space(2)}px ${th.space(8)}px;
    font-size: inherit;
    outline: none;

    ${margin}

    ${props =>
        props.disabled &&
        `opacity: 0.5;
        cursor: unset;
        `}
`

export const Button = ({ disabled, loading, children, ...rest }) => {
    return (
        <StyledButton {...rest} disabled={disabled || loading}>
            {loading ? <Spinner /> : children}
        </StyledButton>
    )
}
