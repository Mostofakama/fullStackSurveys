// router 

import {createBrowserRouter, Navigate} from "react-router-dom"
import Login from "./views/Login.jsx"
import Signup from "./views/Signup.jsx"
import Dashboard from "./views/Dashboard.jsx"
import Surveys from "./views/Surveys.jsx"
import DefaultLayout from "./components/DefaultLayout"
import GuestLayout from "./components/GuestLayout"
const router = createBrowserRouter([
  
  
  {
    path:  '/',
    element: <DefaultLayout />,
    children : [
      {
        path:'/',
        element: <Dashboard />
      },
      {
        path:'/dashboard',
        element: <Navigate to="/" />
      },
      {
        path:'/surveys',
        element: <Surveys />
      },
    ],
  },
  {
    path: '/',
    element: <GuestLayout />,
    children : [
      {
        path:'/signup',
        element: <Signup />
      },
      {
        path:'/login',
        element: <Login />
      },
    ]
  },
  
])

export default router;