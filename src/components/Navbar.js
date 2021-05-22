import React from 'react'
import myLogo from "../images/logo.png"
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div className="containerHome">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <NavLink exact activeClassName='homepage' to='/'>
                    <img className="logo" src={myLogo} alt="logo.."></img>
                </NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item resume">
                            <NavLink exact activeClassName='active-class' to='/resume'>
                                Resume
                            </NavLink>
                        </li>
                        <li className="nav-item projects">
                            <NavLink exact activeClassName='active-class' to='/projects'>
                                Projects
                            </NavLink>
                        </li>
                        <li className="nav-item contact">
                            <NavLink exact activeClassName='active-class' to='/contact'>
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
            </div>
        </div>
    )
}

export default Navbar
