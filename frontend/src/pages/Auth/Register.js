import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux"
import {register, reset} from "../../slices/authSlice"
import "./Auth.css"
import Message from '../../components/Message'

const Register = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const dispatch = useDispatch()

    const {loading, error} = useSelector((state) => state.auth)

    const handleSubmit = (e) => {
        e.preventDefault()

        const user = {
            name, 
            email, 
            password, 
            confirmPassword
        }

        console.log(user)

        dispatch(register(user))
    }

    //limpar todos os auth states
    useEffect(() => {
        dispatch(reset())
    }, [dispatch])

    return (
        <div id='register'>
            <h2>React Images</h2>
            <p className="subtitle">
                Cadastre-se para postar fotos
            </p>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Nome' value={name || ""} onChange={(e) => setName(e.target.value)} />
                <input type="email" placeholder='Email' value={email || ""} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder='Senha' onChange={(e) => setPassword(e.target.value)} value={password || ""} />
                <input type="password" placeholder='Confirme a Senha' value={confirmPassword || ""} onChange={(e) => setConfirmPassword(e.target.value)} />
                {!loading && <input type="submit" value='Cadastrar' />}
                {loading && <input type="submit" value='Aguarde...' disabled />}
                {error && <Message msg={error} type="error" />}
            </form>
            <p>Já tem conta? <Link to='/login' >Clique Aqui</Link> </p>
        </div>
    )
}

export default Register