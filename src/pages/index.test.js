import '@testing-library/jest-dom'

import * as React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Theme } from '~/components'
import { StorageProvider } from '~/modules'
import { localStorageAdapter } from '~/modules/Storage/persistence-adapters/local-storage-adapter'
import { login } from '~/services/sdk'

import { App } from './'

jest.mock('~/services/sdk')

function renderPage() {
    render(
        <Theme>
            <StorageProvider
                persistenceAdapter={localStorageAdapter}
                onRehydrate={data => data}
            >
                <App />
            </StorageProvider>
        </Theme>
    )
}

beforeEach(() => localStorageAdapter.clear())

test('should show login form', async () => {
    renderPage()

    const emailInput = screen.getByLabelText('E-mail')
    const passwordInput = screen.getByLabelText('Senha')
    const submitButton = screen.getByRole('button', { type: 'submit' })
    const signupLink = screen.getByRole('link')

    await waitFor(() => {
        expect(emailInput).toBeInTheDocument()
        expect(passwordInput).toBeInTheDocument()
        expect(submitButton).toBeInTheDocument()
        expect(signupLink).toBeInTheDocument()

        expect(signupLink).toHaveAttribute('href', '/signup')
    })
})

test.skip('should login user when submit form with correct credentials', async () => {
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

    login.mockResolvedValue(Promise.resolve(responseData))

    renderPage()

    const emailInput = screen.getByLabelText('E-mail')
    const passwordInput = screen.getByLabelText('Senha')
    const submitButton = screen.getByRole('button', { type: 'submit' })

    userEvent.type(emailInput, credentials.email)
    userEvent.type(passwordInput, credentials.password)
    userEvent.click(submitButton)

    expect(submitButton).toBeDisabled()

    await waitFor(() =>
        expect(login).toHaveBeenCalledWith({
            password: credentials.password,
            username: credentials.email,
        })
    )

    const loggedInComponent = screen.getByText(`olá ${responseData.user.name}`)
    expect(loggedInComponent).toBeInTheDocument()
})

test('should not login user when submit form with wrong credentials', async () => {
    const credentials = {
        email: 'wrong@mail.com',
        password: '123456',
    }

    login.mockImplementation(() => Promise.reject())

    renderPage()

    const emailInput = screen.getByLabelText('E-mail')
    const passwordInput = screen.getByLabelText('Senha')
    const submitButton = screen.getByRole('button', { type: 'submit' })

    userEvent.type(emailInput, credentials.email)
    userEvent.type(passwordInput, credentials.password)
    userEvent.click(submitButton)

    expect(submitButton).toBeDisabled()

    await waitFor(() =>
        expect(login).toHaveBeenCalledWith({
            password: credentials.password,
            username: credentials.email,
        })
    )

    expect(submitButton).toBeEnabled()
    expect(screen.getByText('Entrar'))
})
