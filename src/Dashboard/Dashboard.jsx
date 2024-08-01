import React from 'react'
import { Outlet } from 'react-router'
import './Dashboard.css'
import Sidebar from './Sidebar'

const Dashboard = () => {
  return (
    <div className='Dashboard'>
   <Sidebar/>
   <Outlet/>
    </div>
  )
}

export default Dashboard
