import React, { useCallback, useRef } from 'react'
import { FiMail, FiLock } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom'
import { FormHandles } from '@unform/core'
import { Form } from '@unform/web'
import * as Yup from 'yup'

import logoImg from '../../assets/laranjo.png'
import Button from '../../components/ButtonSign'
import Input from '../../components/InputSign'
import { useToast } from '../../hooks/toast'
import { useAuth } from '../../hooks/auth'
import getValidationErrors from '../../util/getValidationsErrors'
import { Container, Content } from './styles'

interface SignInFormData {
  email: string
  password: string
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const { signIn } = useAuth()
  const { addToast } = useToast()
  const history = useHistory()

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({})

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail required')
            .email('Fill a valid e-mail'),
          password: Yup.string().required('Password required'),
        })

        await schema.validate(data, { abortEarly: false })

        await signIn({
          email: data.email,
          password: data.password,
        })

        history.push('/')
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error)
          formRef.current?.setErrors(errors)
          return
        }

        addToast({
          type: 'error',
          title: 'Error in authentication',
          description: 'There was an error signing in, check your credentials',
        })
      }
    },
    [signIn, addToast, history],
  )

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Aware" />
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Log In to Aware</h1>

          <Input name="email" icon={FiMail} placeholder="E-mail" type="email" />
          <Input
            name="password"
            icon={FiLock}
            placeholder="Password"
            type="password"
          />

          <Button type="submit" dataTestId="btn-entrar">
            Log In
          </Button>

          <Link to="/forgot-password" data-cy="link-to-forget-password">
            Forgot password? °
          </Link>

          <Link to="/signup" data-cy="link-to-signup">
            Sign up for Aware
          </Link>
        </Form>
      </Content>
    </Container>
  )
}

export default SignIn
