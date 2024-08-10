import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import {
  createBrowserRouter,
} from "react-router-dom";
import AuthorPage from './AuthorPage.jsx'
import Home from './Home/Home.jsx'
import Writeportfolio from './Writeportfolio.jsx'
import Authors from './Authors/Authors.jsx'
import Writings from './Writings/Writings.jsx'
import AboutUs from './Aboutus/AboutUs.jsx'
import Dashboard from './Dashboard/Dashboard.jsx'
import Login from './Authentication/Login.jsx'
import Signup from './Authentication/Signup.jsx'
import Profile from './Dashboard/Inside/Profile.jsx'
import Edit from './Dashboard/Inside/Edit.jsx'
import Post from './Dashboard/Inside/Post.jsx'
import Analytics from './Dashboard/Inside/Analytics.jsx'
import Logout from './Dashboard/Inside/Logout.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path:'',
        element:<Home/>
      },
      {
        path:'author/:id',
        element:<AuthorPage/>
      },
      {
        path:'written/:id',
        element:<Writeportfolio/>
      },{
        path:'authors',
        element:<Authors/>
      },
      {
        path:'writings',
        element:<Writings/>
      },
      {
        path:'about',
        element:<AboutUs/>
      },
      {
        path:'Login',
        element:<Login/>
      },
      {
        path:'logout',
        element:<Logout/>
      },
      {
        path:'signup',
        element:<Signup/>
      },
      {
        path:'Dashboard',
        element:<Dashboard/>,
        children:[
          {
            path: 'profile',
            element: <Profile/>
          },
          {
            path: 'edit',
            element:<Edit/>
          },
          {
            path: 'post',
            element:<Post/>
          },
          {
            path: 'analytics',
            element:<Analytics/>
          },
 
        ]
      }
      
    
    ]}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
