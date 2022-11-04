
import React, {useReducer} from 'react';
import Buttons from './components/Buttons';
import Operators from './components/Operators';
import './components/Style.css';
import reducer from'./components/reducer.js'
import { INITIAL } from './components/Objects';
import { formatOperand } from './components/Objects';
import { ACTIONS } from './components/Objects';

/*
  1.imported my reducer function which executes or renders the reducer function(enhances actions to be triggered
    on the click of any button.)
   2.imported my INITIAL object; this object comprises my initial value on render and represents my state values
3. imported my formatOperand function: this takes in a value checks for dot and assign comma at suitable digits.

*/

function App() {

  const[{previousNumber, currentNumber, operators}, dispatch]= useReducer(reducer, INITIAL);

  return (
   <>
      <p className='head'>calculator</p>
    <div className="page-container">
      <div className='grid-container'>
      <div className='screen'>
      <div className='previous-operand'>{formatOperand(previousNumber)} <span className='operator-sign'>{operators}</span></div>
      <div className='current'>{formatOperand(currentNumber)}</div>
      </div>
      <button value={"Ac"} className="white" onClick={()=> dispatch({type: ACTIONS.Clear})}>Ac</button>
      <button value={"del"} className="white" onClick={()=> dispatch({type: ACTIONS.Delete})}>del</button>
      <Operators dispatch={dispatch} span={"white"} operator={"%"}/>
      <Operators dispatch={dispatch} span={"gold"} operator={"÷"}/>
      <Buttons number={'7'} dispatch={dispatch}/>
      <Buttons number={'8'} dispatch={dispatch}/>
      <Buttons number={'9'} dispatch={dispatch}/>
      <Operators dispatch={dispatch} span={"gold"} operator={"*"}/>
      <Buttons number={'4'} dispatch={dispatch}/>
      <Buttons number={'5'} dispatch={dispatch}/>
      <Buttons number={'6'} dispatch={dispatch}/>
      <Operators dispatch={dispatch} span={"gold"} operator={"-"}/>
      <Buttons number={'1'} dispatch={dispatch}/>
      <Buttons number={'2'} dispatch={dispatch}/>
      <Buttons number={'3'} dispatch={dispatch}/>
      <Operators dispatch={dispatch} span={"gold"} operator={"+"}/>
      <Buttons number={'0'} span={"span-two"} dispatch={dispatch}/>
      <Buttons number={'.'} dispatch={dispatch}/>

      <button value={"="} className="gold" onClick={()=>dispatch({type: ACTIONS.Calculate})}>=</button>
      </div>
     
    </div>
   </>
  );
}

export default App;
