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
        path:'author',
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
        path:'Dashboard',
        element:<Dashboard/>,
        children:[
          {
            path: 'profile',
            element: <div>pp lorem10000 </div>
          }
        ]
      }
      
    
    ]}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)