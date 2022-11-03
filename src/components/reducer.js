
const SIGNS ={
    add:"+",
    minus: "-",
    mutiply:'*',
    division:'/',
    pecentage:'%',
};

function calculate({currentNumber, previousNumber, operator}) {
    let firstOperand = Number(currentNumber)
    let secondOperand = Number(previousNumber)
    let result = '';
    switch (operator) {
        case SIGNS.add:
           result= firstOperand + secondOperand
            break;
        case SIGNS.minus:
           result = firstOperand - secondOperand
            break;
        case SIGNS.mutiply:
           result = firstOperand * secondOperand
            break;
        case SIGNS.division:
           result = firstOperand / secondOperand
            break;
        case SIGNS.pecentage:
           result = firstOperand / secondOperand
            break;
    
        default:
            break;
    }
    
}
export default function reducer(state, {type, payload}) {
    switch (type) {
        case "Add-Numbers":
            if (state.currentNumber === "0" && payload.number === "0") {
                return state
                
            }
            if (payload.number === "." && state.currentNumber.includes(".") ) {
                  return state
                
            }
         
            return{
                ...state,
                currentNumber:` ${state.currentNumber || ""}${ payload.number}` 
            };

         case"operators":
            if(state.currentNumber === "" && state.previousNumber === ""){
              return state
            }
            if(state.currentNumber == null){
                return{
                    ...state,
                    operators: payload.operator
                }
            }
            if(state.previousNumber === ""){
                return{
                    ...state,
                    previousNumber: state.currentNumber,
                    operators: payload.operator,
                    currentNumber: null
                 }
            }
            return{
                ...state,
                previousNumber: calculate(state),
                operators:payload.operator,
                currentNumber: null,
            }
    }
    
}