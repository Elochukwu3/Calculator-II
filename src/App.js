
import React, {useReducer} from 'react';
import Buttons from './components/Buttons';
import './components/Style.css';
import reducer from'./components/reducer.js'
const initial ={previousNumber:'', currentNumber:''}

function App() {
  const[state, dispatch]= useReducer(reducer, initial);
  const {currentNumber, previousNumber} = state;

  return (
    <div className="page-container">
      <div className='grid-container'>
      <div className='screen'>
      <div className='previous-operand'>{previousNumber}</div>
      <div className='current'>{currentNumber}</div>
      </div>
      <button value={"Ac"} className="white">Ac</button>
      <button value={"+/-"} className="white">+/-</button>
      <button value={"%"} className="white">%</button>
      <button value={"/"} className="gold">&divide;</button>
      <Buttons number={'7'} dispatch={dispatch}/>
      <Buttons number={'8'}/>
      <Buttons number={'9'}/>
      <button value={"*"} className="gold">X</button>
      <Buttons number={'4'}/>
      <Buttons number={'5'}/>
      <Buttons number={'6'}/>
      <button value={"-"} className="gold">-</button>
      <Buttons number={'1'}/>
      <Buttons number={'2'}/>
      <Buttons number={'3'}/>
      <button value={"+"} className="gold">+</button>
      <Buttons number={'0'} span={"span-two"}/>
      <Buttons number={'.'}/>

      <button value={"."} className="gold">=</button>
      </div>
     
    </div>
  );
}

export default App;
