// src/Logout.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Logout = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            // Make a request to the server to log out
            await axios.post('http://localhost:8000/api/auth/logout', {}, { withCredentials: true });
            // Optionally clear any local state or session storage if needed
            // Reload the page and redirect to login page
            
            navigate('/login');
            window.location.reload();
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    return (
        <div className='authContainer'>
            <div className='formContainer'>
                <h1>Logout</h1>
                <button onClick={handleLogout}>Logout</button>
            </div>
        </div>
    );
};

export default Logout;
