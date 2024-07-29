import { useState } from "react"

const ConditionalRender = () => {

  const [x] = useState(true)

  const [name, setName] = useState('Mateus')

  return (
    <div>
      <h1>Isso será exibido?</h1>
      {/* Condicional Simples */}
      {x && <p>Se x for true, sim!</p>}
      {!x && <p>Agora x é falso!</p>}

      {/* Condicional if e else */}
      {name === 'João' ? (
        <div>
          <p>O nome é João!</p>
        </div>
      ) : (
        <div>
          <p>Nome não encontrado!</p>
        </div>
      )}
      <button onClick={()=> setName('João') }>Clica aqui!</button>

    </div>
  )
}

export default ConditionalRender