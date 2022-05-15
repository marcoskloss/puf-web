import * as React from 'react'
import styled from 'styled-components'
import { th } from '../../Theme/helpers'

const Container = styled.li`
    display: flex;

    &:not(:last-child) {
        border-bottom: 1px solid ${th.color('line')};
        margin-bottom: ${th.space(3)}px;
        padding-bottom: ${th.space(3)}px;
    }
`
const Title = styled.div`
    flex: 1;
`

const Value = styled.div`
    text-align: right;
    font-size: ${th.size(2)}px;

    small {
        margin-top: ${th.space(1)}px;
        font-size: ${th.size(1)}px;
    }
`

const Currency = styled.div`
    color: ${props => (props.negative ? th.color('red') : th.color('green'))};
`

const formatCurrency = value =>
    new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(value)

export const Transaction = ({ title, value, resolved }) => {
    return (
        <Container>
            <Title>{title}</Title>
            <Value>
                <Currency negative={value < 0}>
                    {formatCurrency(value)}
                </Currency>
                <small>{resolved ? 'Paga' : 'Não paga'}</small>
            </Value>
        </Container>
    )
}
