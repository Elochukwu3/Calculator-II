
export default function reducer(state, {type, payload}) {
    switch (type) {
        case "Add-Numbers":
            if (payload.number === "0" && state.currentNumber === "0") {
                console.log("jjj");
                // return state;
            }
            return{
                ...state,
                currentNumber:` ${state.currentNumber || ""} ${ payload.number}` 
            }
            default:
              
    }
    
}