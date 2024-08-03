import { useState } from 'react'
import './App.css'
import MyComponent from './components/MyComponent'

function App() {

  const [n, setN] = useState(15)

  const redTitle = false

  return (
    <>
      <div>
        {/* CSS global */}
        <h1>React com CSS</h1>
        {/* CSS de componente */}
        <MyComponent/>
        <p>Este parágrafo é do App.js</p>
        {/* Inline CSS */}
        <p style={{color: 'yellow', borderTop: '2px solid red'}}>Este elemento foi estilizado de forma inline</p>
        {/* Css inline dinâmico */}
        <h2 style={n < 10 ? (
          {color: 'purple'}
        ):(
          {color: 'pink'}
        )}>CSS dinâmico</h2>
        <button onClick={() => setN(9)}>Lilás</button>
        <button onClick={() => setN(15)}>Rosa</button>
        {/* Classe dinâmica */}
        <h2 className={redTitle ? ('red-title'):('title')}>Esse título vai ter classe dinâmica</h2>
      </div>
    </>
  )
}

export default App
