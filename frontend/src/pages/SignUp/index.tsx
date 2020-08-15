import React, { useCallback, useRef } from 'react'
import { FiMail, FiLock, FiUser } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom'
import { FormHandles } from '@unform/core'
import { Form } from '@unform/web'
import * as Yup from 'yup'

import logoImg from '../../assets/laranjo.png'
import Button from '../../components/ButtonSign'
import Input from '../../components/InputSign'
import { useToast } from '../../hooks/toast'
import getValidationErrors from '../../util/getValidationsErrors'
import { Container, Content } from './styles'
import api from '../../services/api'

interface SignUpFormData {
  email: string
  password: string
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const { addToast } = useToast()
  const history = useHistory()

  const handleSubmit = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({})

        const schema = Yup.object().shape({
          name: Yup.string().required('Name required'),
          email: Yup.string()
            .required('E-mail required')
            .email('Fill a e-mail valid'),
          password: Yup.string().min(6, 'Minimum six digits'),
        })

        await schema.validate(data, { abortEarly: false })

        await api.post('/users', data)

        history.push('/home')

        addToast({
          type: 'success',
          title: 'Successful registration!',
          description: 'You can now login',
        })
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error)

          formRef.current?.setErrors(errors)

          return
        }

        addToast({
          type: 'error',
          title: 'Error in registration',
          description:
            'An error occurred while registering, check your data and try again.',
        })
      }
    },
    [addToast, history],
  )

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Aware" />
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Create your account</h1>

          <Input name="name" icon={FiUser} placeholder="Name" />
          <Input name="email" icon={FiMail} placeholder="E-mail" type="email" />
          <Input
            name="password"
            icon={FiLock}
            placeholder="Password"
            type="password"
          />

          <Button type="submit" dataTestId="btn-register">
            Register
          </Button>

          <Link to="/signin" data-cy="link-to-signin">
            Return to Login
          </Link>
        </Form>
      </Content>
    </Container>
  )
}

export default SignUp
