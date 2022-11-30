import React, { useEffect, useState } from 'react'
import {useSelector, useDispatch} from "react-redux"
import { Link } from 'react-router-dom'
import Message from '../../components/Message'
import { login, reset } from '../../slices/authSlice'
import "./Auth.css"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const dispatch = useDispatch()
  const {loading, error} = useSelector((state) => state.auth)

  const handleSubmit = (e) => {
    e.preventDefault()

    const user = {
      email,
      password
    }

    dispatch(login(user))
  }

  // limpar os states do auth
  useEffect(() => {
    dispatch(reset())
  }, [dispatch])

  return (
    <div id='login'>
      <h2>Boltzmann</h2>
      <p className="subtitle">Faça o login para postar fotos</p>
      <form onSubmit={handleSubmit} >
        <input value={email || ""} onChange={((e) => setEmail(e.target.value))} type="email" placeholder='Email' />
        <input value={password || ""} onChange={((e) => setPassword(e.target.value))} type="password" placeholder='Senha' />
        {!loading && <input type="submit" value='Entrar' />}
        {loading && <input type="submit" value='Aguarde...' disabled />}
        {error && <Message msg={error} type="error" />}
      </form>
      <p>Não tem uma conta ? <Link to='/register'>Clique Aqui</Link>
      </p>
    </div>
  )
}

export default Login