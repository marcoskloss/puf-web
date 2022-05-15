import * as React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

import { Box, Logo, font } from '../../components'
import { useAuth } from '../../modules'
import { login } from '../../services/sdk'

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
    const navigate = useNavigate()
    const [, { login: setAuth }] = useAuth()

    async function onSubmit(auth) {
        try {
            const { user, token } = await login(auth)

            setAuth({ user, token })
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }

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
                <Form onSubmit={onSubmit} />
            </CenteredBox>
        </Container>
    )
}
