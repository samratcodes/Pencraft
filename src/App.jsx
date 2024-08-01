import { useState } from 'react'
import {Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
 <>
 <Navbar/>
 <Outlet/>
 <div className='gap'>

 </div>
 <footer>
        <div className="footer-content">
          <p>&copy; 2024 Pencraft. All rights reserved.</p>
          <ul className="footer-links">
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms of Service</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>
      </footer>
 </>
  )
}

export default App
