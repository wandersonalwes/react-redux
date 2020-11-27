import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import * as authActions from '../../store/modules/auth/actions'

export default function SignIn () {
  const dispatch = useDispatch()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div>
      <label htmlFor="email">E-mail</label>
      <input
        type="email"
        name="email"
        placeholder="Digite seu E-mail"
        id="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />

      <label htmlFor="password">Senha</label>
      <input
        type="password"
        name="password"
        placeholder="Digite sua senha"
        id="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />

      <button onClick={() => dispatch(authActions.signInRequest(email, password))}>
        Entrar
      </button>
    </div>
  )
}
