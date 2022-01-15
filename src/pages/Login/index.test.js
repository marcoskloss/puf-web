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

    const formData = { email: 'invalid email' }

    const passwordInput = screen.getByLabelText('Senha')
    const emailInput = screen.getByLabelText('E-mail')

    await waitFor(() => userEvent.type(emailInput, formData.email))
    await waitFor(() => userEvent.click(passwordInput))

    const emailError = screen.getByText('E-mail inválido')
    expect(emailError).toBeInTheDocument()
})

test('should validate and show error in password field on blur', async () => {
    renderPage()

    const passwordInput = screen.getByLabelText('Senha')
    const emailInput = screen.getByLabelText('E-mail')

    await waitFor(() => userEvent.click(passwordInput))
    await waitFor(() => userEvent.click(emailInput))

    const passwordError = screen.getByText('Digite uma senha')
    expect(passwordError).toBeInTheDocument()
})

test('should validate and show error in all fields on submit', async () => {
    renderPage()

    const submitBtn = screen.getByRole('button')

    await waitFor(() => userEvent.click(submitBtn))

    const passwordError = screen.getByText('Digite uma senha')
    const emailError = screen.getByText('Informe o seu e-mail')

    expect(passwordError).toBeInTheDocument()
    expect(emailError).toBeInTheDocument()
    expect(submitBtn).toBeDisabled()
})

test('should e-enable submit button and hide errors when form is valid', async () => {
    renderPage()

    const formData = {
        email: 'valid@mail.com',
        password: '123456'
    }

    const submitBtn = screen.getByRole('button')
    const emailInput = screen.getByLabelText('E-mail')
    const passwordInput = screen.getByLabelText('Senha')

    await waitFor(() => userEvent.click(submitBtn))
    userEvent.type(emailInput, formData.email)
    await waitFor(() => userEvent.type(passwordInput, formData.password))

    expect(submitBtn).toBeEnabled()
})
