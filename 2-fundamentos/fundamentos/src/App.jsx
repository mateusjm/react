// components
import FirstComponent from './components/FirstComponent'

// styles / CSS
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Fundamentos React</h1>
      <FirstComponent />
    </>
  )
}

export default App
