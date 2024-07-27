// arquivos de estilo

import MyComponent from "./MyComponent"

const FirstComponent = () => {
  // essa função faz isso

  return (
    <div>
      {/* Algum comentário */}
      <h1>Meu primeiro componente</h1>
      <p className="teste">Meu texto</p>
      <MyComponent/>
    </div>
  )
}

// exportando componente
export default FirstComponent