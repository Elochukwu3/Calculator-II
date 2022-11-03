
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

         return{
            ...state,
            previousNumber: state.currentNumber
         }
           
              
    }
    
}