import * as React from 'react'

import { Field } from './'

export default {
    title: 'Uikit/Field',
    component: Field,
    argTypes: {
        label: { type: 'string' },
        value: { type: { name: 'string', required: true } },
        type: {
            defaultValue: 'text',
            type: 'string',
            description: 'Input type',
        },
        placeholder: { type: 'string' },
        disabled: { type: 'boolean', defaultValue: false },
        error: { type: 'string', defaultValue: '' },
        name: { type: { name: 'string', required: true } },
        onChange: { action: 'change' },
        onBlur: { action: 'blur' },
    },
}

const Template = args => <Field {...args} />

export const Basic = Template.bind({})
Basic.args = {
    label: 'Label',
    placeholder: 'label',
    name: 'input',
}

export const Disabled = Template.bind({})
Disabled.args = {
    label: 'Label',
    placeholder: 'label',
    name: 'input',
    disabled: true,
}

export const Errored = Template.bind({})
Errored.args = {
    label: 'Label',
    placeholder: 'label',
    name: 'input',
    error: 'Invalid input',
}
