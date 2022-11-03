
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
            break
        case SIGNS.minus:
           result = firstOperand - secondOperand
            break
        case "*":
           result = firstOperand * secondOperand
            break
        case SIGNS.division:
           result = firstOperand / secondOperand
            break
        case SIGNS.pecentage:
           result = firstOperand / secondOperand
            break
            
        }
        
        return result.toString()
    
}
export default function reducer(state, {type, payload}) {
    console.log(state);
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
            if(state.previousNumber == nll){
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
                operators: null,
                currentNumber: null,
            }
    }
   
}