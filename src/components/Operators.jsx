import React, {useState} from 'react'

export default function Operators({operator, span, dispatch, id}) {
    
  

    const[active, setActive] = useState([])
   function  addOperator(e) { 
    dispatch({ type: "operators", payload:{operator: operator} })
  setActive((prev)=>[...prev, e.target])
 
}

showChoosen(active, id)
  return (
    <button 
      value={operator}
      className= {span}
      onClick={addOperator}
   
    >
      {operator}
    </button>
  )
}
