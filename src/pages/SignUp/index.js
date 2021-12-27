import * as React from 'react'

import { Field, Box, Button } from '~/components'

export const SignUp = () => {
    return (
        <Box as="main" flexbox col center flex={1}>
            <Box style={{ width: 380 }}>
                <Field type="text" name="name" label="Nome" mb={3} />
                <Field type="text" name="email" label="E-mail" mb={3} />
                <Field type="password" name="password" label="Senha" mb={3} />

                <Box flexbox center>
                    <Button>Registrar</Button>
                </Box>
            </Box>
        </Box>
    )
}
