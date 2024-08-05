// importando CSS
import './MyForm.css'
import { useState } from 'react'

const MyForm = ({user}) => {
  // controlled input

  // gerenciamento de dados
  const [name, setName] = useState(user ? (user.name) : (''))
  const [email, setEmail] = useState(user ? (user.email) : (''))
  const [bio, setBio] = useState(user ? (user.bio) : (''))
  const [role, setRole] = useState(user ? (user.role) : (''))

  const handleName = (e) => {
    setName(e.target.value)
  }

  // single page application
  const handleSubmit = (e) => {
    e.preventDefault()  
    console.log({
      name: name,
      email: email,
      bio: bio,
      role: role
    })

    // limpando formulário
    setName('')
    setEmail('')
    setBio('')
  }

  return (
    <div>
      {/* Envio de form */}
      {/* Criação de Form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input 
            type="text" 
            name='name' 
            placeholder='Digite o seu nome' 
            onChange={handleName}
            value={name}
          />
        </div>
        {/* Label envolvendo o Input */}
        <label>
          <span>E-mail:</span>
          {/* Simplificação de manipulação de state */}
          <input 
            type="e-mail" 
            name='email' 
            placeholder='Digite o seu e-mail' 
            onChange={(e)=> {setEmail(e.target.value)}}
            value={email}
          />
        </label>
        {/* TextArea */}
        <label>
          <span>Bio</span>
          <textarea 
            name="bio" 
            placeholder='Digite o seu texto' 
            onChange={(e)=> setBio(e.target.value)} 
            value={bio}>
          </textarea>
        </label>
        
        {/* select */}
        <label>
          <span>Função no sistema</span>
          <select name='role' onChange={(e)=> setRole(e.target.value)} value={role}>
            <option value="">- - -</option>
            <option value="user">Usuário</option>
            <option value="editor">Editor</option>
            <option value="admin">Administrador</option>
          </select>
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}

export default MyForm