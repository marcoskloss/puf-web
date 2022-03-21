import * as React from 'react'
import { Theme } from '~/components'

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
}

export const decorators = [
    Story => (
        <Theme>
            <div>
                <Story />
            </div>
        </Theme>
    ),
]
