import React from "react";
import { ACTIONS } from "./Objects";

export default function Buttons({ number, dispatch, span }) {
  return (
    <button
      value={number}
      className={span}
      onClick={() =>
        dispatch({ type: ACTIONS.AddNumbers, payload: { number: number } })
      }
    >
      {number}
    </button>
  );
}
