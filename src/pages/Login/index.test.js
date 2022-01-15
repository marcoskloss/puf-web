import '@testing-library/jest-dom'

import * as React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import { render, screen, waitFor } from '@testing-library/react'

import { Theme } from '~/components'
import { Login } from './'

function renderPage() {
    render(
        <Theme>
            <Router>
                <Login />
            </Router>
        </Theme>
    )
}

test('should validate and show error in email field on blur', async () => {
    renderPage()

    const passwordInput = screen.getByLabelText('Senha')
    const emailInput = screen.getByLabelText('E-mail')

    await waitFor(() => userEvent.type(emailInput, 'invalid email'))
    await waitFor(() => userEvent.click(passwordInput))

    expect(screen.getByText('E-mail inválido')).toBeInTheDocument()
})

test('should validate and show error in password field on blur', async () => {
    renderPage()

    const passwordInput = screen.getByLabelText('Senha')
    const emailInput = screen.getByLabelText('E-mail')

    await waitFor(() => userEvent.click(passwordInput))
    await waitFor(() => userEvent.click(emailInput))

    expect(screen.getByText('Digite uma senha')).toBeInTheDocument()
})

test('should validate and show error in all fields on submit', async () => {
    renderPage()

    const submitBtn = screen.getByRole('button')

    await waitFor(() => userEvent.click(submitBtn))

    expect(screen.getByText('Digite uma senha')).toBeInTheDocument()
    expect(screen.getByText('Informe o seu e-mail')).toBeInTheDocument()
    expect(submitBtn).toBeDisabled()
})

test('should e-enable submit button and hide errors when form is valid', async () => {
    renderPage()

    const submitBtn = screen.getByRole('button')
    await waitFor(() => userEvent.click(submitBtn))

    const emailInput = screen.getByLabelText('E-mail')
    userEvent.type(emailInput, 'valid@mail.com')

    const passwordInput = screen.getByLabelText('Senha')
    await waitFor(() => userEvent.type(passwordInput, '123456'))


    expect(submitBtn).toBeEnabled()
})
