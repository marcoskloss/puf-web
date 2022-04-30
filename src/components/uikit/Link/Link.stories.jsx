import * as React from 'react'
import StoryRouter from 'storybook-react-router'
import { Link } from './'

export default {
    title: 'Uikit/Link',
    component: Link,
    decorators: [
        Story => (
            <StoryRouter>
                <Story />
            </StoryRouter>
        ),
    ],
    argTypes: {
        children: { control: 'text' },
        fontSize: {
            type: 'number',
            defaultValue: 1,
            description: '`font-size` in spacing units',
        },
        color: { type: 'string' },
        textAlign: { type: 'string' },
        fontWeight: { type: 'string', defaultValue: 'bold' },
    },
}

const Template = args => <Link {...args} />

export const Basic = Template.bind({})
Basic.args = {
    children: 'Link',
    color: 'gray',
    fontSize: 1,
}
