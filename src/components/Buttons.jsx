import React from "react";

export default function Buttons({number, dispatch}, span) {
  return <button value={number} className={span}>{number}</button>;
}
