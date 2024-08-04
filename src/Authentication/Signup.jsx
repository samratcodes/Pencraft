import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

const Signup = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ firstName, lastName, email, password });
    };

    return (
        <div className='authContainer'>
            <div className='formContainer '>
                <h1>Sign Up</h1>
                <form onSubmit={handleSubmit}>
                    <div className='inputGroup'>
                        <label htmlFor="firstName">First Name:</label>
                        <input type="text" name="firstName" id="firstName" placeholder='First Name'
                            value={firstName} onChange={e => setFirstName(e.target.value)} />
                    </div>
                    <div className='inputGroup'>
                        <label htmlFor="lastName">Last Name:</label>
                        <input type="text" name="lastName" id="lastName" placeholder='Last Name'
                            value={lastName} onChange={e => setLastName(e.target.value)} />
                    </div>
                    <div className='inputGroup'>
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" id="email" placeholder='Email'
                            value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className='inputGroup'>
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="password" id="password" placeholder='Password'
                            value={password} onChange={e => setPassword(e.target.value)} />
                    </div>
                    <button type="submit">Create Account</button>
                    <div className='linkContainer'>
                        Already have an account?
                        <Link to='/login'>Log in</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;
