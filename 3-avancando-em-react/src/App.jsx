import { useState } from 'react'
import './App.css'

// importando components
import ManageData from './components/ManageData'
import ListRender from './components/ListRender'
import ConditionalRender from './components/ConditionalRender'
import ShowUserName from './components/ShowUserName'
import CairDetails from './components/CairDetails'
import Fragment from './components/Fragment'
import Container from './components/Container'

// importando imagens
import City from './assets/city.jpg'

function App() {
  //const name = 'Joaquim'
  const [userName, setName] = useState('Maria')

  const [count, setCount] = useState(0)

  const cars = [
    {id: 1, brand: 'Ferrari', color: 'Amarela', newCar: true, km: 0},
    {id: 2, brand: 'KIA', color: 'Branco', newCar: false, km: 34343},
    {id: 3, brand: 'Renault', color: 'Azul', newCar: false, km: 234}
  ]

  return (
    <>
      <div>
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
        <CairDetails brand='VW' km={100000} color='Azul' newCar={false}/>
        {/* Reaproveitando */}
        <CairDetails brand='Ford' km={0} color='Vermelha' newCar={true}/>
        <CairDetails brand='Fiat' km={4500} color='Branco' newCar={false}/>
        {/* Loop em array de objetos */}
        {cars.map((car)=> (
          <CairDetails
          brand={car.brand}
          color={car.color}
          km={car.km}
          newCar={car.newCar}
          />
        ))}
        {/* Fragments */}
        <Fragment propFragment='teste'/>
        {/* Children */}
        <Container myValue='teste'>
          <p>E este é o conteúdo!</p>
        </Container>
        <Container myValue='teste 2'>
          <h5>Testando o container</h5>
        </Container>
      </div>
    </>
  )
}

export default App
