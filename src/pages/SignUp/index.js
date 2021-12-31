import * as React from 'react'
import { useState } from 'react'
import axios from 'axios'

import { Field, Box, Button } from '~/components'

export const SignUp = () => {
    const [values, setValues] = useState({})
    const [loading, setLoading] = useState(false)

    const onChange = ev => {
        setValues(prev => ({
            ...prev,
            [ev.target.name]: ev.target.value,
        }))
    }

    const onSubmit = async ev => {
        const response = axios.post('http://localhost:9901/users', values)
    }

    return (
        <Box as="main" flexbox col center flex={1}>
            <Box style={{ width: 380 }}>
                <Field
                    type="text"
                    name="name"
                    label="Nome"
                    onChange={onChange}
                    disabled={loading}
                    error={'Eita! ...'}
                    mb={3}
                />
                <Field
                    type="text"
                    name="email"
                    label="E-mail"
                    onChange={onChange}
                    disabled={loading}
                    mb={3}
                />
                <Field
                    type="password"
                    name="password"
                    label="Senha"
                    onChange={onChange}
                    disabled={loading}
                    mb={3}
                />

                <Box flexbox center>
                    <Button type="button" onClick={onSubmit} loading={loading}>
                        Registrar
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}
