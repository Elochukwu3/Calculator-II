
const SIGNS ={
    add:"+",
    minus: "-",
    mutiply:'*',
    division:'÷',
    pecentage:'%',
};

function calculate({currentNumber, previousNumber, operators}) {
    let firstOperand = Number( previousNumber)
    let secondOperand = Number(currentNumber)
    
    let result = '';
    switch (operators) {
        case SIGNS.add:
           result= firstOperand + secondOperand
            break;
        case SIGNS.minus:
           result = firstOperand - secondOperand
            break;
        case SIGNS.mutiply:
           result = firstOperand * secondOperand
            break
        case SIGNS.division:
           result = firstOperand / secondOperand
            break
        case SIGNS.pecentage:
            
           result = firstOperand / 10
            break
            
        }
        
        return result.toString()
    
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
            if(state.currentNumber == null && state.previousNumber == null){
              return state
            }
            if(state.currentNumber == null){
                return{
                    ...state,
                    operators: payload.operator
                }
            }
            if(state.previousNumber == null){
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
                operators: payload.operator,
                currentNumber: null,
            }
            case "clear":
                return{}
            case "evaluate":
                if (state.currentNumber== null || state.previousNumber== null || state.operators == null) {
                    return state
                }
                return{
                    ...state,
                    currentNumber: calculate(state),
                    previousNumber: null,
                    operators: null
                }
    }
   
}