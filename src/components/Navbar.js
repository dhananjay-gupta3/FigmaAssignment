/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { useNavigate, NavLink } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
    const navigate = useNavigate();
    return (
        <div >
            <div className='nav'>
                <NavLink className='navlink' to='/' >Home</NavLink>
                <button
                    className='btn'
                    onClick={() => navigate('/login')}
                    type='login' >
                    Login
                </button>
            </div>
        </div>
    )
}

export default Navbar