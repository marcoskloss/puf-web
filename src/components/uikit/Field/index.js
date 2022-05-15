import * as React from 'react'
import styled from 'styled-components'

import { th } from '../../Theme'
import { Box } from '../Box'
import { Input } from '../Input'
import { Label } from '../Label'

const ErrorMessage = styled(Box)`
    color: ${th.color('red')};
    padding: ${th.space(1)}px ${th.space(3)}px;
    font-size: ${th.size(2)}px;
`

export const Field = ({
    value,
    type,
    name,
    label,
    placeholder,
    disabled,
    error,
    onChange,
    onBlur,
    ...props
}) => (
    <Box {...props} flexbox col>
        <Label htmlFor={name}>{label}</Label>
        <Input
            type={type}
            id={name}
            name={name}
            placeholder={placeholder}
            value={value}
            disabled={disabled}
            onChange={onChange}
            onBlur={onBlur}
            hasError={!!error}
            p={1}
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
    </Box>
)
