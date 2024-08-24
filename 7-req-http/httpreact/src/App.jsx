import { useState, useEffect } from 'react'
import './App.css'

// 4 - custom hook
import { useFetch } from './hooks/useFetch'

const url = 'http://localhost:3000/products'

function App() {

  const [products, setProducts] = useState([])

  // 4- custom
  const {data: items, httpConfig, loading} = useFetch(url)

  const [name, setName] = useState('')
  const [price, setPrice] = useState('')

  // 1- resgatando dados
  /* useEffect(() => {
    async function fetchData() {
      const res = await fetch(url)
      const data = await res.json()

      setProducts(data)

    }

    fetchData()
  }, []) */

  // 2 - adicionando produtos
  const handleSubmit = async (e) => {
    e.preventDefault()

    const product = {
      name,
      price
    }

    // configurando um objeto para determinar POST, GET por padrão
    /* const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product),
    })
    
    // 3 - carregamento dinâmico
    const addedProduct = await res.json()

    setProducts((prevProducts)=> [...prevProducts, addedProduct]) */

    // 5- refatorando post
    httpConfig(product, 'POST')

    setName('')
    setPrice('')
  }

  return (
    <>
      <div className='App'>
        <h1>Lista de produtos</h1>
        {/* 6- loading */}
        {loading && <p>Carregando dados...</p>}
        <ul>{items && items.map((product)=> (
          <li key={product.id}>
            {product.name} - R$: {product.price}
          </li>
        ))}</ul>
      </div>
      <div className='add-product'>
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input 
              type="text" 
              value={name} 
              name='name' 
              onChange={(e)=> setName(e.target.value)} 
            />
          </label>
          <label>
            Preço:
            <input 
              type="number" 
              value={price} 
              name='price' 
              onChange={(e)=> setPrice(e.target.value)} 
            />
          </label>
          <input 
            type="submit" 
            value="Criar" 
          />
        </form>
      </div>
    </>
  )
}

export default App
