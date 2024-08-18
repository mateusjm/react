import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const url = 'http://localhost:3000/products'

  // salvar os dados
  const [products, setProducts] = useState([])

  // 1- resgatando dados
  useEffect(async()=> {
    async function fetchData() {
      // usando fecth API de JS
      const res = await fetch(url)

      // transformando JSON em Objeto
      const data = await res.json()

      setProducts(data)
    }

    fetchData()
  }, [])

  console.log(products)

  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <h1>Lista de Produtos</h1>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {product.name} - R$: {products.price}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
