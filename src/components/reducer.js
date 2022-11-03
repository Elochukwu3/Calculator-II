
export default function reducer(state, {type, payload}) {
    switch (type) {
        case "Add-Numbers":
            if (state.currentNumber === "7") {
                console.log(state.currentNumber);
            }
        return{
            ...state,
                currentNumber:` ${state.currentNumber || ''} ${ payload.dgit}` 
            
        }
        default:
    }
    
}