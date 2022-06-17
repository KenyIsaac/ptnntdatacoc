import React from 'react'
import { 
    Container, 
    Form, 
    FormButton, 
    FormContent, 
    FormH1, 
    FormInput, 
    FormLabel, 
    FormWrap, 
    // Icon,
    Text 
} from './SigninElements'
import Navbar from '../Navbar';

const SignIn = () => {
  return (
    <>
    
    <Container>
    <Navbar />
        <FormWrap>
            {/* <Icon to='/'>Clash of Clans</Icon> */}
            <FormContent>
                <Form action="#">
                    <FormH1>Sign In</FormH1>
                    <FormLabel htmlFor='for'>Correo Electrónico</FormLabel>
                    <FormInput type='email' required />
                    <FormLabel htmlFor='for'>Contraseña</FormLabel>
                    <FormInput type='password' required />
                    <FormButton type='submit'>Continuar</FormButton>
                    <Text>¿Olvidó la Contraseña?</Text>
                </Form>
            </FormContent>
        </FormWrap>
    </Container>
    </>
  )
}

export default SignIn