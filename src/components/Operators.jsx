import React, {useState} from 'react'

export default function Operators({operator, span, dispatch, id}) {
   function  addOperator() { 
    dispatch({ type: "operators", payload:{operator: operator} })
 
}
  return (
    <button 
      value={operator}
      className= { span}
      onClick={addOperator}
   
    >
      {operator}
    </button>
  )
}
