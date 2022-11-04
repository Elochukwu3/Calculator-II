import React, {useState} from 'react'

export default function Operators({operator, span, dispatch}) {
    function showChoosen(arr, n) {
        for (let index = 0; index < arr.length; index++) {
            arr[n].style.background = "rgba(9, 4, 49, 0.2)";
        }
        console.log(arr[n].className);
      }
      let kk = []

    const[active, setActive] = useState([])
   function  addOperator(e) { 
    dispatch({ type: "operators", payload:{operator: operator} })
    // console.log(e.target);
  setActive((prev)=>[...prev, e.target])
 
}

showChoosen(active, 0)
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
