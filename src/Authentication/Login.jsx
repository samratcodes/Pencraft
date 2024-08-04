import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ username, password });
    };

    return (
        <div className='authContainer'>
            <div className='formContainer'>
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className='inputGroup'>
                        <label htmlFor="username">Username:</label>
                        <input type="text" name="username" id="username" placeholder='Example: @hellouser'
                            value={username} onChange={e => setUsername(e.target.value)} />
                    </div>
                    <div className='inputGroup'>
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="password" id="password" placeholder='Password'
                            value={password} onChange={e => setPassword(e.target.value)} />
                    </div>
                    <button type="submit">Submit</button>
                    <div className='linkContainer'>
                        Don't have an account?
                        <Link to='/signup'>Sign up</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
