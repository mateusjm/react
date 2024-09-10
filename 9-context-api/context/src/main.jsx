import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import { CounterContextProvider } from './context/CounterContext.jsx'

import Home from '../src/pages/Home.jsx'
import Products from '../src/pages/Products.jsx'
import About from '../src/pages/About.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: 'products',
        element: <Products/>
      },
      {
        path: 'about',
        element: <About/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterContextProvider>
      {/* 2- criando provider */}
      <RouterProvider router={router}/>
        <App/>
    </CounterContextProvider>
  </React.StrictMode>,
)
