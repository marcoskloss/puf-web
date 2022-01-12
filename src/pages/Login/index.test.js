import '@testing-library/jest-dom'

import * as React from 'react'
import { render, screen } from '@testing-library/react'

import { BrowserRouter as Router } from 'react-router-dom'
import { Theme } from '~/components'

import { Login } from './'

test('should show login form', () => {
    render(
        <Theme>
            <Router>
                <Login />
            </Router>
        </Theme>
    )

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
