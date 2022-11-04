export const SIGNS = {
  add: "+",
  minus: "-",
  mutiply: "*",
  division: "÷",
  pecentage: "%",
};
export const ACTIONS = {
  AddNumbers: "Add-Numbers",
  Operators: "operators",
  Clear: "clear",
  Calculate: "evaluate",
  Delete: "delete",
};
export const INITIAL = {
  previousNumber: null,
  currentNumber: null,
  operators: null,
  startClicking: false,
};

const INTEGER_FORMATTER = new Intl.NumberFormat("en-us", {
    maximumFractionDigits: 0,
  })
export function formatOperand(operand) {
    if (operand == null) return
    const [integer, decimal] = operand.split(".")
    if (decimal == null) return INTEGER_FORMATTER.format(integer)
    return `${INTEGER_FORMATTER.format(integer)}.${decimal}`
  }