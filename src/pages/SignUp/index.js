import * as React from 'react'
import { Box, Logo } from '~/components'

import { ReactComponent as Ilustra } from './ilustra.svg'
import { Form } from './Form'

const Container = ({ children }) => (
    <Box flexbox flex={1}>
        {children}
    </Box>
)

const CenteredBox = ({ children, ...props }) => (
    <Box {...props} flex={1} flexbox col center style={{ width: 445 }}>
        {children}
    </Box>
)

export const SignUp = () => {
    return (
        <Container>
            <CenteredBox bg="black">
                <Logo p={6} />
                <Ilustra />
            </CenteredBox>

            <CenteredBox as="main">
                <Form />
            </CenteredBox>
        </Container>
    )
}
