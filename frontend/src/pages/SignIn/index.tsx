import React, { useCallback, useRef } from 'react'
import { FiMail, FiLock } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { FormHandles } from '@unform/core'
import { Form } from '@unform/web'

import logoImg from '../../assets/laranjo.png'
import Button from '../../components/ButtonSign'
import Input from '../../components/InputSign'
import { Container, Content } from './styles'

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const handleSubmit = useCallback(() => {
    alert('fez o submit')
  }, [])

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
