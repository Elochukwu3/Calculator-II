import React from 'react'

export default function Operators({operator, span, dispatch}) {
  return (
    <button
      value={operator}
      className={span}
      onClick={() => dispatch({ type: "operators", payload:{operator: operator} })}
    >
      {operator}
    </button>
  )
}
