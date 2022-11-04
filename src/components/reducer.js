const SIGNS = {
  add: "+",
  minus: "-",
  mutiply: "*",
  division: "÷",
  pecentage: "%",
};

function calculate({ currentNumber, previousNumber, operators }) {
  let firstOperand = Number(previousNumber);
  let secondOperand = Number(currentNumber);

  let result = "";
  switch (operators) {
    case SIGNS.add:
      result = firstOperand + secondOperand;
      break;
    case SIGNS.minus:
      result = firstOperand - secondOperand;
      break;
    case SIGNS.mutiply:
      result = firstOperand * secondOperand;
      break;
    case SIGNS.division:
      result = firstOperand / secondOperand;
      break;
    case SIGNS.pecentage:
      result = firstOperand / 10;
      break;
  }

  return result.toString();
}
export default function reducer(state, { type, payload }) {
  switch (type) {
    case "Add-Numbers":
      if (state.startClicking) {
        return {
          ...state,
          currentNumber: payload.number,
          startClicking: false,
        };
      }
      if (state.currentNumber === "0" && payload.number === "0") return state;
      if (state.currentNumber) {
        if (payload.number === "." && state.currentNumber.includes("."))
          return state;
      }

      if (payload.number === ".")
        return { ...state, currentNumber: payload.number };

      return {
        ...state,
        currentNumber: ` ${state.currentNumber || ""}${payload.number}`,
      };

    case "operators":
      if (state.currentNumber == null && state.previousNumber == null) {
        return state;
      }
      if (state.currentNumber == null) {
        return {
          ...state,
          operators: payload.operator,
        };
      }
      if (state.previousNumber == null) {
        return {
          ...state,
          previousNumber: state.currentNumber,
          operators: payload.operator,
          currentNumber: null,
        };
      }
      return {
        ...state,
        previousNumber: calculate(state),
        operators: payload.operator,
        currentNumber: null,
      };

    case "clear":
      return {};
    // calculate if the equals sign is clicked
    case "evaluate":
      if (
        state.currentNumber == null ||
        state.previousNumber == null ||
        state.operators == null
      ) {
        return state;
      }
      return {
        ...state,
        currentNumber: calculate(state),
        startClicking: true,
        previousNumber: null,
        operators: null,
      };
    case "delete":
      console.log(typeof state.currentNumber);
      if (state.startClicking) {
        return {
          ...state,
          currentNumber: null,
          startClicking: false,
        };
      }
      if (state.currentNumber == null) return state;
      if (state.currentNumber.lenght === 1) {
        return {
          ...state,
          currentNumber: null,
        };
      }
      return {
        ...state,
        currentNumber: state.currentNumber.substring(
          0,
          state.currentNumber.length - 1
        ),
      };
  }
}
