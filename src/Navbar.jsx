import React from 'react';
import Logo from './assets/pencraftll.png';
import { Link } from 'react-router-dom';
import { MdDashboard } from "react-icons/md";
const Navbar = () => {
  const NavData = [
    { name: 'Home', link: '/' ,logo : <i class="fa-solid fa-house"></i>},
    { name: 'Authors', link: '/authors' ,logo : <i class="fa-solid fa-people-group"></i>},
    { name: 'Writings', link: '/writings' ,logo : <i class="fa-solid fa-book"></i>},
    { name: 'About us', link: '/about' ,logo : <i class="fa-solid fa-info"></i>},
  ];

  return (
    <div className='Navbar'>
      <div className='Logoimg'>
        <img src={Logo} alt='Pencraft Logo' className='logoimg' />
        <div>PenCraft</div>
      </div>
      
      <div className='Navelement'>
        {NavData.map((item) => (
          <div key={item.name} className='Navitem'>
            <div className='Navlogo'>
            {item.logo}
            </div>
            <Link to={item.link}> {item.name}</Link>
          </div>
        ))}
      </div>
      
      <div className='Dashboardbtn'>
        <MdDashboard className='icon' />
        <div className='text'>Dashboard</div>
      </div>
    </div>
  );
};

export default Navbar;
