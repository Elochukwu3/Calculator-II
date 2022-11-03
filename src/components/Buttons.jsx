import React from "react";

export default function Buttons({ number, dispatch, span }) {
  return (
    <button
      value={number}
      className={span}
      onClick={(e) => dispatch({ type: "Add-Numbers", payload: e.value})}
    >
      {number}
    </button>
  );
}
