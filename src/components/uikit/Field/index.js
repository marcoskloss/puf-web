import * as React from 'react'
import styled from 'styled-components'

import { th } from '~/components/Theme'
import { Box } from '~/components/uikit/Box'
import { Input } from '~/components/uikit/Input'
import { Label } from '~/components/uikit/Label'

const ErrorMessage = styled(Box)`
    color: ${th.color('red')};
    padding: ${th.space(1)}px ${th.space(3)}px;
    font-size: ${th.size(2)}px;
`

export const Field = ({ type, name, label, disabled, error, ...props }) => (
    <Box {...props} flexbox col>
        <Label htmlFor={name}>{label}</Label>
        <Input type={type} id={name} disabled={disabled} p={1} />
        {error && <ErrorMessage>{error}</ErrorMessage>}
    </Box>
)
