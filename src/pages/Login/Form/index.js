import * as React from 'react'
import * as yup from 'yup'
import { useFormik } from 'formik'

import { Field, Box, Button, Link } from '~/components'

const validationSchema = yup.object().shape({
    username: yup
        .string()
        .email('E-mail inválido')
        .required('Informe o seu e-mail'),
    password: yup.string().required('Digite uma senha'),
})

export const Form = ({ onSubmit }) => {
    const {
        values,
        handleChange,
        handleSubmit,
        handleBlur,
        isSubmitting,
        errors,
        touched,
        isValid,
    } = useFormik({
        onSubmit,
        validationSchema,
        initialValues: {
            username: '',
            password: '',
        },
    })

    return (
        <Box as="form" style={{ width: 380 }} onSubmit={handleSubmit}>
            <Field
                type="text"
                name="username"
                label="E-mail"
                placeholder="Digite o seu e-mail"
                value={values.username}
                disabled={isSubmitting}
                error={touched.username && errors.username}
                onChange={handleChange}
                onBlur={handleBlur}
                mb={3}
            />
            <Field
                type="password"
                name="password"
                label="Senha"
                placeholder="Digite a sua senha"
                value={values.password}
                disabled={isSubmitting}
                error={touched.password && errors.password}
                onChange={handleChange}
                onBlur={handleBlur}
                mb={3}
            />

            <Box flexbox center col gap={3} mt={6}>
                <Button
                    type="submit"
                    disabled={!isValid}
                    loading={isSubmitting}
                >
                    Entrar
                </Button>

                <Box fontSize={1} color="gray">
                    Não possui cadastro?{' '}
                    <Link
                        to="/signup"
                        fontSize={1}
                        fontWeight="bold"
                        color="gray"
                    >
                        Cadastre-se!
                    </Link>
                </Box>
            </Box>
        </Box>
    )
}
