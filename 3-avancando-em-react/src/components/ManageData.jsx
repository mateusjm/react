// importando useState
import {useState} from 'react'

const ManageData = () => {
  let someData = 10

  const [number, setNumber] = useState(15)

  console.log(number)

  return (
    <div>
      <div>
        <p>Valor: {someData}</p>
        <button onClick={()=> (someData = 15)}>Mudar variável</button>
      </div>
      <div>
        <p>Valor: {number}</p>
        <button onClick={()=> setNumber(25)}>Mudar variável</button>
        <button onClick={()=> setNumber(15)}>Iniciar variável</button>
        <button onClick={()=> setNumber(0)}>Zerar variável</button>
      </div>
    </div>
  )
}

export default ManageData