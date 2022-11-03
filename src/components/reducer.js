
export default function reducer(state, {type, payload}) {
    switch (type) {
        case "Add-Numbers":
            console.log(payload);
            return{
                ...state,
                currentNumber:` ${state.currentNumber || ""} ${ payload.number}` 
            }
            default:
              
    }
    
}