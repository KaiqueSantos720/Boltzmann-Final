import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"

const Footer = () => {
    return (
        <footer id='footer'>
            <div className='t'>
                <h3>BOLTZMANN</h3>
            </div>
            <div className="icons">
                <ul className='ul'>
                    <li ><Link><i aria-hidden="true" className="fa fa-facebook"></i></Link></li>
                    <li><Link><i aria-hidden="true" className="fa fa-instagram"></i></Link></li>
                </ul>
            </div>
            <div className="cpy">
                <h4>Copyright ©2022 Boltzmann</h4>
            </div>
        </footer>
    )
}

export default Footer