import '@testing-library/jest-dom'

import * as React from 'react'
import { render, screen } from '@testing-library/react'

import { BrowserRouter as Router } from 'react-router-dom'
import { Theme } from '~/components'

import { Login } from './'

test('foo', () => {
    render(
        <Theme>
            <Router>
                <Login />
            </Router>
        </Theme>
    )

    const input = screen.getByLabelText('E-mail')

    expect(input).toBeInTheDocument()
})
