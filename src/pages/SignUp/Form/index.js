import * as React from 'react'
import axios from 'axios'
import * as yup from 'yup'
import { useFormik } from 'formik'

import { Field, Box, Button, Link } from '~/components'

const validationSchema = yup.object().shape({
    name: yup.string().required('Informe o seu nome'),
    email: yup
        .string()
        .email('E-mail inválido')
        .required('Informe o seu e-mail'),
    password: yup.string().required('Digite uma senha'),
})

export const Form = () => {
    const {
        values,
        handleChange,
        handleSubmit,
        handleBlur,
        isSubmitting,
        errors,
        touched,
    } = useFormik({
        onSubmit,
        validationSchema,
        initialValues: {
            name: '',
            email: '',
            password: '',
        },
    })

    async function onSubmit(values) {
        try {
            await axios.post('http://localhost:9901/users', values)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Box as="form" style={{ width: 380 }} onSubmit={handleSubmit}>
            <Field
                type="text"
                name="name"
                label="Nome"
                value={values.name}
                disabled={isSubmitting}
                error={touched.name && errors.name}
                onChange={handleChange}
                onBlur={handleBlur}
                mb={3}
            />
            <Field
                type="text"
                name="email"
                label="E-mail"
                value={values.email}
                disabled={isSubmitting}
                error={touched.email && errors.email}
                onChange={handleChange}
                onBlur={handleBlur}
                mb={3}
            />
            <Field
                type="password"
                name="password"
                label="Senha"
                value={values.password}
                disabled={isSubmitting}
                error={touched.password && errors.password}
                onChange={handleChange}
                onBlur={handleBlur}
                mb={3}
            />

            <Box flexbox center col gap={3} mt={6}>
                <Button type="submit" loading={isSubmitting}>
                    Registrar
                </Button>
                <Link to="/" fontSize={1} fontWeight="bold" color="gray">
                    Já sou cadastrado
                </Link>
            </Box>
        </Box>
    )
}
