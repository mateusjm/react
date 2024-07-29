const CairDetails = ({color, km, brand}) => {
  return (
    <div>
      <h2>Detalhes do carro:</h2>
      <li>Marca: {brand}</li>
      <li>KM: {km}</li>
      <li>Cor: {color}</li>
    </div>
  )
}

export default CairDetails