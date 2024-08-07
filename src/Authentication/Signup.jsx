import React, { useState,useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Auth.css';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [authorName, setAuthorName] = useState('');
    const [description, setDescription] = useState('');
    const [contact, setContact] = useState('');
    const[isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = async (e) => {

        e.preventDefault();
        const fetchUserData = async () => {
            try {
              const response = await axios.get('http://localhost:8000/api/auth/user', { withCredentials: true });
              setIsLoggedIn(response.status === 200);
            } catch (error) {
              console.error('Error:');
            }
          };
        
          
            fetchUserData(); // Call the fetch function when the component mounts
        
        
if(isLoggedIn){
    navigate('/dashboard/profile');
}
        const userData = {
            Username: username.trim(),
            Password: password.trim(),
            AuthorName: authorName.trim(),
            Description: description.trim(),
            contacts: contact.trim(), // Provided contact field

        };

        try {
            const response = await axios.post('http://localhost:8000/api/auth/register', userData);
            console.log('Response:', response);
            navigate('/Login');
        } catch (error) {
            if (error.response) {
                // API returned an error response
                console.error('Error Response Data:', error.response.data);
                console.error('Error Response Status:', error.response.status);
                console.error('Error Response Headers:', error.response.headers);
            } else if (error.request) {
                // Request was made but no response received
                console.error('Error Request:', error.request);
            } else {
                // Something happened in setting up the request
                console.error('Error Message:', error.message);
            }
        }
    };

    return (
        <div className='authContainer'>
            <div className='formContainer'>
                <h1>Sign Up</h1>
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
                    <div className='inputGroup'>
                        <label htmlFor="authorName">Author Name:</label>
                        <input 
                            type="text" 
                            name="authorName" 
                            id="authorName" 
                            placeholder='Author Name'
                            value={authorName} 
                            onChange={e => setAuthorName(e.target.value)} 
                        />
                    </div>
                    <div className='inputGroup'>
                        <label htmlFor="description">Description:</label>
                        <textarea 
                            name="description" 
                            id="description" 
                            placeholder='Description'
                            value={description} 
                            onChange={e => setDescription(e.target.value)} 
                        />
                    </div>
                    <div className='inputGroup'>
                        <label htmlFor="contact">Contact:</label>
                        <input 
                            type="text" 
                            name="contact" 
                            id="contact" 
                            placeholder='Contact'
                            value={contact} 
                            onChange={e => setContact(e.target.value)} 
                        />
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
