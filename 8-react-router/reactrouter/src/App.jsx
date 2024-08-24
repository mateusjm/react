import './App.css'

//2- reaproveitamento de estrutura
import { Outlet } from 'react-router-dom'

// components
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <div className='App'>
        <Navbar/>
        <h1>React Router</h1>
        <Outlet/>
        <Footer/>
      </div>
    </>
  )
}

export default App
