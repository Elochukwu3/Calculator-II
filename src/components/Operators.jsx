import React from "react";
import { ACTIONS } from "./Objects";
// created an operator component(math signs) with props (the operator, class name, dispatch(which executes the function when the button matches an operator ))
//  a payload which creates an object for adding the operator sign
export default function Operators({ operator, span, dispatch }) {
  function addOperator() {
    dispatch({ type: ACTIONS.Operators, payload: { operator: operator } });
  }
  return (
    <button value={operator} className={span} onClick={addOperator}>
      {operator}
    </button>
  );
}
