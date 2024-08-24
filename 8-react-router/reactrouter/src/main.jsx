import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// 1 - configurando o router
import {createBrowserRouter, Navigate, RouterProvider} from 'react-router-dom'

// routes
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import ErrorPage from './components/ErrorPage.jsx'
import ContactDetails from './pages/ContactDetails.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    // 3 - página de erro
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: 'about',
        element: <About/>
      },
      {
        path: 'contact',
        element: <Contact/>
      },
      // 5 - nested routes - identificado unico - dynamic routes
      {
        path: '/contact/:id',
        element: <ContactDetails/>
      },
      // 7 - navigate para páginas não existentes
      {
        path: 'oldcontact',
        element: <Navigate to='/contact'/>
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
