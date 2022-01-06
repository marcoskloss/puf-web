import * as React from 'react'
import { Box, Logo } from '~/components'

import { ReactComponent as Ilustra } from './ilustra.svg'
import { Form } from './Form'

const Container = ({ children }) => (
    <Box flexbox flex={1}>
        {children}
    </Box>
)

export const SignUp = () => {
    return (
        <Container>
            <Box bg="black" flex={1} flexbox col center>
                <Box style={{ width: 445 }}>
                    <Logo p={6} />
                    <Ilustra />
                </Box>
            </Box>
            <Box as="main" flexbox col center flex={1}>
                <Form />
            </Box>
        </Container>
    )
}
