
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'
const Login = () => {
    const [name, setName] = useState("");
    const [psw, setPsw] = useState("")
    const navigate = useNavigate()

    const handle = (e) => {
        e.preventDefault();
        localStorage.setItem('Name', name);
        localStorage.setItem('password', psw);
        redireact()
    }


    const redireact = () => {
        navigate('/loggedin')
    }
    return (
        <div className='mains'>
            <h1>Login</h1>
            <form onSubmit={handle}>
                <div className='form'>
                    <div>
                        <label className='logo'>UserID</label>
                        <input className='input'
                            value={name}
                            type='text'
                            required
                            onChange={(e) => setName(e.target.value)}
                            placeholder='UserID' />
                    </div>
                    <div>
                        <label className='logo'>Password</label>
                        <input className='input'
                            value={psw}
                            onChange={(e) => setPsw(e.target.value)}
                            type='password'
                            required
                            placeholder='Password' />
                        <div className=''>
                            <button className='btns' type='submit'>Submit</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login