import React, { useState } from 'react'
import "./Navbar.css"

import {BsSearch, BsHouseDoorFill, BsFillPersonFill, BsFillCameraFill, BsBoxArrowRight} from "react-icons/bs"
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { useSelector } from 'react-redux'
import {logout, reset} from "../slices/authSlice"
import {useDispatch} from "react-redux"
import Logo from "../assets/logo-vermelha.png"

const Navbar = () => {
    const {auth} = useAuth()
    const {user} = useSelector((state) => state.auth)

    const [query, setQuery] = useState("")

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate("/login")
    }

    const handleSearch = (e) => {
        e.preventDefault()
        
        if(query){
            return navigate(`/search?q=${query}`)
        }
    }

    return (
        <nav id="nav">
            <a className='a' href='http://127.0.0.1:5500/frontend/Boltzmann/paginaprincipal.html'><img src={Logo} alt="" /></a>
            <form id='search-form' onSubmit={handleSearch}>
                <BsSearch />
                <input type="text" placeholder='Pesquisar' onChange={(e) => setQuery(e.target.value)} value={query} />
            </form>
            <ul id="nav-links">
                {auth ? (
                    <>
                        <li>
                            <NavLink to='/'>
                                <BsHouseDoorFill/>
                            </NavLink>
                        </li>
                        {user && (
                            <li>
                                <NavLink to={`/users/${user._id}`}>
                                    <BsFillCameraFill />
                                </NavLink>
                            </li>
                        )}
                        <li>
                            <NavLink to='profile'>
                                <BsFillPersonFill />
                            </NavLink>
                        </li>
                        <li>
                            <span onClick={handleLogout}><BsBoxArrowRight /></span>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <NavLink to='login'>
                                Entrar
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='register'>
                                Cadastrar
                            </NavLink>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    )
}

export default Navbar