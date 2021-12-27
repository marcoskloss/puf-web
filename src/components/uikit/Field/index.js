import React from 'react'

import { Box } from '~/components/uikit/Box'
import { Input } from '~/components/uikit/Input'
import { Label } from '~/components/uikit/Label'

export const Field = ({ type, name, label, ...props }) => (
    <Box {...props} flex col>
        <Label htmlFor={name}>{label}</Label>
        <Input type={type} id={name} p={1} />
    </Box>
)
