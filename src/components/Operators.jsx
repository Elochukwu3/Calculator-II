import React, {useState} from 'react'

export default function Operators({operator, span, dispatch}) {
    const[active, setActive] = useState(false)
   function  addOperator() { 
    dispatch({ type: "operators", payload:{operator: operator} })
    setActive(!active)
}

  return (
    <button 
      value={operator}
      className= {active ?  "colored": span}
      onClick={addOperator}
    >
      {operator}
    </button>
  )
}
