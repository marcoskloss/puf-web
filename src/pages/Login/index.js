import * as React from 'react'
import styled from 'styled-components'
import { Box, Logo, font } from '~/components'

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

const Title = styled('h1')`
    ${font}
`

export const Login = () => {
    return (
        <Container>
            <CenteredBox bg="black">
                <Logo p={6} />
                <Ilustra />
            </CenteredBox>

            <CenteredBox as="main">
                <Title textAlign="center" fontSize={6}>
                    Login
                </Title>
                <Form />
            </CenteredBox>
        </Container>
    )
}
