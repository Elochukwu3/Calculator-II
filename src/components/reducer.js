
function reducer(state, {type, payload}) {
    switch (type) {
        case "Add-Numbers":
        return{
            ...state,
                currentNumber:` ${state.currentNumber} ${ payload.dgit}` 
            
        }
    }
    
}