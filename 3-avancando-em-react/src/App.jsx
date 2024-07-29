import { useState } from 'react'
import './App.css'

// importando components
import ManageData from './components/ManageData'
import ListRender from './components/ListRender'
import ConditionalRender from './components/ConditionalRender'
import ShowUserName from './components/ShowUserName'
import CairDetails from './components/CairDetails'

// importando imagens
import City from './assets/city.jpg'

function App() {
  const name = 'Joaquim'
  const [userName, setName] = useState('Maria')

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
      <ConditionalRender/>
      {/* Props */}
      <ShowUserName name={userName}/>
      <button onClick={()=> setName('Mateus')}>Mudar nome</button>
      {/* Destructuring */}
      <CairDetails brand='VW' km={100000} color='Azul'/>
    </>
  )
}

export default App
