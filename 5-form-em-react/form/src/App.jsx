import { useState } from 'react'
import './App.css'

// importando componentes
import MyForm from './components/MyForm'

function App() {
  return (
    <>
      <div>
        <h2>Forms</h2>
        <MyForm user={
          {name: 'Josias', email: 'josias@gmail.com', bio: 'Eu sou o Josias!'}}/>
      </div>
    </>
  )
}

export default App
