import * as React from 'react'

import { ReactComponent as Svg } from './logo.svg'
import { Box } from '~/components'

export const Logo = props => (
    <Box {...props}>
        <Svg />
    </Box>
)
