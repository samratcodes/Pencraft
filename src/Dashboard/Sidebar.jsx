import React from 'react'
import Logo from '../assets/pencraftll.png';
import { Link } from 'react-router-dom';
import { MdDashboard } from "react-icons/md";
const Sidebar = () => {
    const DashboardData = [
        {
          name: "Profile",
          link: "/dashboard/profile",
          icon:<i className="fa-solid fa-user"></i>
        },
        {
          name: "Edit Profile",
          link: "/dashboard/Edit",
          icon:<i class="fa-solid fa-pen-to-square"></i>
        },
        {
          name: "Post",
          link: "/dashboard/Post",
          icon:<i class="fa-solid fa-address-card"></i>
        },
        {
          name: "Analytics",
          link: "/dashboard/analytics",
          icon:<i class="fa-solid fa-chart-simple"></i>
        },
      ];
  return (
    <div className="sidebar">
    <div className="sidebar-content">
    
    <div className='Dashboardbtns'>
        <MdDashboard className='icons' />
        <div className='texts'>Dashboard</div>
      </div>
      <div className="nav-links">
        {DashboardData.map((nav, index) => (
          <Link key={index} to={nav.link} className="nav-link">
            {nav.icon}
            <span>{nav.name}</span>
          </Link>
        ))}
      </div>
    </div>
  </div>
  )
}

export default Sidebar
