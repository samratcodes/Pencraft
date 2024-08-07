// src/Login.js
import React, { useState,useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Auth.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();
    const fetchUserData = async () => {
        try {
          const response = await axios.get('http://localhost:8000/api/auth/user', { withCredentials: true });
          console.log('API Response:', response);
          setIsLoggedIn(response.status === 200);
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      };
    
      useEffect(() => {
        fetchUserData(); // Call the fetch function when the component mounts
      }, []);
    
if(isLoggedIn){
navigate('/dashboard/profile');
}

    const handleSubmit = async (e) => {
        e.preventDefault();

        const loginData = {
            username: username.trim(),
            password: password.trim(),
        };

        try {
            const response = await axios.post('http://localhost:8000/api/auth/login', loginData, {
                withCredentials: true  // Include this option to send cookies with the request
            });
            console.log('Login Response:', response);
            setSuccess('Login successful! Redirecting...');
            setError('');
            navigate('/dashboard/profile');
            window.location.reload();
        } catch (error) {
            if (error.response) {
                setError('Login failed. Please check your credentials and try again.');
                console.error('Error Response Data:', error.response.data);
                console.error('Error Response Status:', error.response.status);
                console.error('Error Response Headers:', error.response.headers);
            } else if (error.request) {
                setError('No response received. Please check your network connection.');
                console.error('Error Request:', error.request);
            } else {
                setError('An error occurred. Please try again.');
                console.error('Error Message:', error.message);
            }
            setSuccess('');
        }
    };

    return (
        <div className='authContainer'>
            <div className='formContainer'>
                <h1>Login</h1>
                {error && <p className='error'>{error}</p>}
                {success && <p className='success'>{success}</p>}
                <form onSubmit={handleSubmit}>
                    <div className='inputGroup'>
                        <label htmlFor="username">Username:</label>
                        <input 
                            type="text" 
                            name="username" 
                            id="username" 
                            placeholder='Username'
                            value={username} 
                            onChange={e => setUsername(e.target.value)} 
                        />
                    </div>
                    <div className='inputGroup'>
                        <label htmlFor="password">Password:</label>
                        <input 
                            type="password" 
                            name="password" 
                            id="password" 
                            placeholder='Password'
                            value={password} 
                            onChange={e => setPassword(e.target.value)} 
                        />
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
