import React, { createContext, useCallback, useState, useContext } from 'react'
import api from '../services/api'

interface IUser {
  id: string
  name: string
  email: string
  avatar_url: string
}

interface IAuthState {
  token: string
  user: IUser
}

interface ISignInCredentials {
  email: string
  password: string
}

interface IAuthContextData {
  user: IUser
  signIn(credentials: ISignInCredentials): void
  signOut(): void
  updateUser(user: IUser): void
}

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData)

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<IAuthState>(() => {
    const token = localStorage.getItem('@Aware:token')
    const user = localStorage.getItem('@Aware:user')

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`

      return { token, user: JSON.parse(user) }
    }

    return {} as IAuthState
  })

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('/sessions', {
      email,
      password,
    })

    const { token, user } = response.data
    localStorage.setItem('@Aware:token', token)
    localStorage.setItem('@Aware:user', JSON.stringify(user))

    api.defaults.headers.authorization = `Bearer ${token}`

    setData({ token, user })
  }, [])

  const signOut = useCallback(() => {
    localStorage.removeItem('@Aware:token')
    localStorage.removeItem('@Aware:user')

    setData({} as IAuthState)
  }, [])

  const updateUser = useCallback(
    (user: IUser) => {
      localStorage.setItem('@Aware:user', JSON.stringify(user))

      setData({
        token: data.token,
        user,
      })
    },
    [setData, data.token],
  )

  return (
    <AuthContext.Provider
      value={{ user: data.user, signIn, signOut, updateUser }}
    >
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(): IAuthContextData {
  const context = useContext(AuthContext)

  return context
}

export { AuthProvider, useAuth }
