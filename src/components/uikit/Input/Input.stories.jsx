import * as React from 'react'

import { Input } from './'

export default {
    title: 'Uikit/Input',
    component: Input,
    argTypes: {
        value: { type: { name: 'string', required: true } },
        type: {
            defaultValue: 'text',
            type: 'string',
            description: 'Input type',
        },
        placeholder: { type: 'string' },
        disabled: { type: 'boolean', defaultValue: false },
        hasError: { type: 'boolean', defaultValue: false },
        name: { type: { name: 'string', required: true } },
        onChange: { action: 'change' },
        onBlur: { action: 'blur' },
    },
}

const Template = args => <Input {...args} />

export const Basic = Template.bind({})
Basic.args = {
    placeholder: 'label',
    name: 'input',
}

export const Disabled = Template.bind({})
Disabled.args = {
    placeholder: 'label',
    name: 'input',
    disabled: true,
}

export const Errored = Template.bind({})
Errored.args = {
    placeholder: 'label',
    name: 'input',
    hasError: true,
}
