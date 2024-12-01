import { useContext } from "react"
import { CounterContext } from "../context/CounterContext"
import ChangeCounter from "../components/ChangeCounter"

import { useTitleColorContext } from "../hooks/useTitleColorContext"

const About = () => {

  const {counter} = useContext(CounterContext)
  const {color, dispatch} = useTitleColorContext()

  return (
    <div>
      <h1 style={{color: color}}>About</h1>
      <p>Valor do contador: {counter}</p>
      <ChangeCounter/>
    </div>
  )
}

export default About