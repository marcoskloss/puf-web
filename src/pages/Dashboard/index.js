import * as React from 'react'
import styled from 'styled-components'

import { th, Logo } from '../../components'
import { Transaction } from '../../components/system'

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

const Layout = ({ children }) => (
    <Container>
        <Menu>
            <Logo onlyIcon height={50} />
        </Menu>
        <Main>{children}</Main>
    </Container>
)

const Title = styled.h1`
    font-size: ${th.size(6)}px;
`

const Section = styled.section`
    background: ${th.color('black')};
    padding: ${th.space(3)}px ${th.space(5)}px;
    border-radius: ${th.space(1)}px;
    position: relative;
`

const SectionTitle = styled.h2`
    font-size: ${th.size(2)}px;
    font-weight: 400;
`

const AddButton = styled.button`
    position: absolute;
    right: 0;
    top: 0;
    border: 0;
    background: ${th.color('darkGray')};
    color: ${th.color('gray')};
    font-size: ${th.size(4)}px;
    font-weight: 'bold';
    padding: ${th.space(2)}px ${th.space(4)}px;
    border-radius: 0 ${th.space(0)}px 0 ${th.space(0)}px;
`

const SectionHeader = styled.header`
    margin-bottom: ${th.space(7)}px;
`

export const Dashboard = () => {
    return (
        <Layout>
            <Title>Dashboard</Title>
            <Section>
                <SectionHeader>
                    <SectionTitle>Transações</SectionTitle>
                    <AddButton>+</AddButton>
                </SectionHeader>
                <ul>
                    <Transaction
                        title="Conta A"
                        value={-53.0}
                        resolved={false}
                    />
                    <Transaction title="Conta B" value={33.0} resolved />
                </ul>
            </Section>
        </Layout>
    )
}
