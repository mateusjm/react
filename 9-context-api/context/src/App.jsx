import './App.css'

import {BrowserRouter, Routes, Route} from 'react-router-dom'

// pages
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'


//components
import Navbar from './components/Navbar'

function App() {
  return (
    <div className='App'>
      <h1>React Router</h1>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path= "/" element={<Home/>} />
          <Route path='/products' element={<Products/>} />
          <Route path= "/about" element={<About/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;