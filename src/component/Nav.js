import React from 'react'
// import {Navbar, Container} from 'react-bootstrap'
import LOGO from '../assets/logo.svg'

const Nav = () => {
    return (
        <div className="navigation_containers">
            <div className="nav_logo">
                <img src={ LOGO } alt="Logo" srcset="" />
            </div>

            <div className="nav_bar">
                <ul>
                    <li><a href="">THE MAIN</a></li>
                    <li><a href="">GALLERY</a></li>
                    <li><a href="">PROJECTS</a></li>
                    <li><a href="">CERTIFICATE</a></li>
                    <li><a href="">CONTACTS</a></li>
                </ul>
            </div>
        
        </div>
    )
}

export default Nav
