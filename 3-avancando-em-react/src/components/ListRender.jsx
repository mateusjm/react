// importando useState
import { useState } from "react";

const ListRender = () => {

  const [list] = useState(['Mateus', 'Pedro', 'Josias'])

  const [users, setUsers] = useState([
    {id: 1, name: 'Mateus', age: 31},
    {id: 2, name: 'João', age: 28},
    {id: 3, name: 'Pedro', age: 44}
  ])

  const deleteRandom = () => {
    // gerando número aleatório de 0 a 3
    const randomNumber = Math.floor(Math.random() * 4)

    // usuários que tem o id diferente do número aleatório são mantidos
    setUsers((prevUsers)=> {
      // prevUsers estado atual
      console.log(prevUsers)
      return prevUsers.filter((user)=> randomNumber !== user.id)
    })
  }

  return (
    <div>
      <ul>
        {list.map((item, i)=> (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <ul>
        {users.map((user)=> (
          <li key={user.id}>{user.name} - {user.age}</li>
        ))}
      </ul>
      <button onClick={deleteRandom}>Delete random user</button>
    </div>
    
  )
}

export default ListRender