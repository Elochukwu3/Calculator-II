import React from "react";
import { ACTIONS } from "./Objects";

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
