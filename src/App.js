
import Buttons from './components/Buttons';
import './components/Style.css';

function App() {
  return (
    <div className="page-container">
      <div className='grid-container'>
      <div className='screen'>
      <div className='previous-operand'>000</div>
      <div className='current'>0</div>
      </div>
      <button value={"Ac"} className="white">Ac</button>
      <button value={"+/-"} className="white">+/-</button>
      <button value={"%"} className="white">%</button>
      <button value={"/"} className="gold">&divide;</button>
      <Buttons number={'7'} />
      <Buttons number={'8'}/>
      <Buttons number={'9'}/>
      <button value={"*"} className="gold">X</button>
      <button value={"4"}>4</button>
      <button value={"5"}>5</button>
      <button value={"6"}>6</button>
      <button value={"-"} className="gold">-</button>
      <button value={"1"}>1</button>
      <button value={"2"}>2</button>
      <button value={"3"}>3</button>
      <button value={"+"} className="gold">+</button>
      <button value={"0"} className='span-two'>0 </button>
      <button value={"."}>.</button>
      <button value={"."} className="gold">=</button>
      </div>
     
    </div>
  );
}

export default App;
