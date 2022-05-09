import * as React from 'react'
import styled from 'styled-components'

import { th, Logo } from '~/components'

const Container = styled.div`
    display: flex;
    flex: 1;
`

const Main = styled.main`
    flex: 1;
    max-width: 1280px;
    margin: 0 auto;
`

const Menu = styled.aside`
    background-color: ${th.color('black')};
    padding: ${th.space(2)}px;
`

export const Dashboard = () => {
    return (
        <Container>
            <Menu>
                <Logo onlyIcon height={50} />
            </Menu>
            <Main>content</Main>
        </Container>
    )
}
