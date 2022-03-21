import * as React from 'react'

import { Button } from './'

export default {
    title: 'Uikit/Button',
    component: Button,
    argTypes: {
        disabled: { control: 'boolean' },
        loading: { control: 'boolean' },
        children: { control: 'text' },
        onClick: { action: 'clicked' },
    },
}

const Template = args => <Button {...args} />

export const Basic = Template.bind({})
Basic.args = {
    loading: false,
    children: 'Button',
}
