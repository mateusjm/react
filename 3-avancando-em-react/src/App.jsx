import { useState } from 'react'
import './App.css'

// importando components
import ManageData from './components/ManageData'
import ListRender from './components/ListRender'

// importando imagens
import City from './assets/city.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Avançando em React</h1>
        {/* Imagem em public */}
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
      {/* Imagem em asset */}
      <div>
        <img src={City} alt="Cidade" />
      </div>
      <ManageData/>
      <ListRender/>
    </>
  )
}

export default App
