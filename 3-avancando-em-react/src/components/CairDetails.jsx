const CairDetails = ({color, km, brand, newCar}) => {
  return (
    <div>
      <h2>Detalhes do carro:</h2>
      <ul>
        <li>Marca: {brand}</li>
        <li>KM: {km}</li>
        <li>Cor: {color}</li>
      </ul>
      {newCar ? <p>Esse carro é novo</p> : <p>Esse carro já foi usado!</p>}
    </div>
  )
}

export default CairDetails