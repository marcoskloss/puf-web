import '@testing-library/jest-dom'

import * as React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import axios from 'axios'

import { Theme } from '~/components'
import { AuthProvider } from '~/modules'

import { App } from './'

jest.mock('axios')

function renderPage() {
    render(
        <Theme>
            <AuthProvider>
                <App />
            </AuthProvider>
        </Theme>
    )
}

beforeEach(() => window.localStorage.clear())

test('should show login form', () => {
    renderPage()

    const emailInput = screen.getByLabelText('E-mail')
    const passwordInput = screen.getByLabelText('Senha')
    const submitButton = screen.getByRole('button', { type: 'submit' })
    const signupLink = screen.getByRole('link')

    expect(emailInput).toBeInTheDocument()
    expect(passwordInput).toBeInTheDocument()
    expect(submitButton).toBeInTheDocument()
    expect(signupLink).toBeInTheDocument()

    expect(signupLink).toHaveAttribute('href', '/signup')
})

test('should login user when submit form with correct credentials', async () => {
    const credentials = {
        email: 'user@mail.com',
        password: '123456',
    }

    const responseData = {
        user: {
            id: 1,
            name: 'User',
            email: credentials.email,
        },
        token: 'asdasdasd',
    }

    axios.get.mockImplementation(() =>
        Promise.resolve({
            data: responseData,
        })
    )

    renderPage()

    const emailInput = screen.getByLabelText('E-mail')
    const passwordInput = screen.getByLabelText('Senha')
    const submitButton = screen.getByRole('button', { type: 'submit' })

    userEvent.type(emailInput, credentials.email)
    userEvent.type(passwordInput, credentials.password)
    userEvent.click(submitButton)

    expect(submitButton).toBeDisabled()

    await waitFor(() =>
        expect(axios.get).toHaveBeenCalledWith(
            expect.stringMatching(/login/g),
            {
                auth: {
                    password: credentials.password,
                    username: credentials.email,
                },
            }
        )
    )

    const loggedInComponent = screen.getByText(`olá ${responseData.user.name}`)
    expect(loggedInComponent).toBeInTheDocument()
})

test('should not login user when submit form with wrong credentials', async () => {
    const credentials = {
        email: 'wrong@mail.com',
        password: '123456',
    }

    axios.get.mockImplementation(() => Promise.reject())

    renderPage()

    const emailInput = screen.getByLabelText('E-mail')
    const passwordInput = screen.getByLabelText('Senha')
    const submitButton = screen.getByRole('button', { type: 'submit' })

    userEvent.type(emailInput, credentials.email)
    userEvent.type(passwordInput, credentials.password)
    userEvent.click(submitButton)

    expect(submitButton).toBeDisabled()

    await waitFor(() =>
        expect(axios.get).toHaveBeenCalledWith(
            expect.stringMatching(/login/g),
            {
                auth: {
                    password: credentials.password,
                    username: credentials.email,
                },
            }
        )
    )

    expect(submitButton).toBeEnabled()
    expect(screen.getByText('Entrar'))
})
