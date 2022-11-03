import React from "react";

export default function Buttons({ number, dispatch, span }) {
  return (
    <button
      value={number}
      className={span}
      onClick={() => dispatch({ type: "Add-Numbers", payload:{ number }})}
    >
      {number}
    </button>
  );
}
