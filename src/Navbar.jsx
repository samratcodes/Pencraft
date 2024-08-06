import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MdDashboard } from "react-icons/md";
import axios from 'axios';
import Logo from './assets/pencraftll.png';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [navVisible, setNavVisible] = useState(false); // State to control visibility
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

  const NavData = [
    { name: 'Home', link: '/', logo: <i className="fa-solid fa-house"></i> },
    { name: 'Authors', link: '/authors', logo: <i className="fa-solid fa-people-group"></i> },
    { name: 'Writings', link: '/writings', logo: <i className="fa-solid fa-book"></i> },
    { name: 'About us', link: '/about', logo: <i className="fa-solid fa-info"></i> },
  ];

  const handleDashboardClick = () => {
    navigate('/dashboard/profile');
  };

  const handleToggleNav = () => {
    setNavVisible(!navVisible); // Toggle the visibility state
  };

  return (
    <div className='Navbar'>
      <div className='Logoimg'>
        <img src={Logo} alt='Pencraft Logo' className='logoimg' />
        <div>PenCraft</div>
      </div>

      <div className='Hamburger' onClick={handleToggleNav}>
        <i className="fa-solid fa-bars"></i> {/* Hamburger icon */}
      </div>

      <div className={`Navelement ${navVisible ? 'open' : ''}`}>
        {NavData.map((item) => (
          <div key={item.name} className='Navitem'>
            <div className='Navlogo'>
              {item.logo}
            </div>
            <Link to={item.link}>{item.name}</Link>
          </div>
        ))}
      </div>

      {isLoggedIn ? (
        <div className='Dashboardbtn' onClick={handleDashboardClick}>
          <MdDashboard className='icon' />
          <div className='text'>Dashboard</div>
        </div>
      ) : (
        <Link to='/login' className='Loginbtn'>
          <div className='text'>Login</div>
        </Link>
      )}
    </div>
  );
};

export default Navbar;
