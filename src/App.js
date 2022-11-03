
import Buttons from './components/Buttons';
import './components/Style.css';
const spantwo ={
  
}

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
      <Buttons number={'4'}/>
      <Buttons number={'5'}/>
      <Buttons number={'6'}/>
      <button value={"-"} className="gold">-</button>
      <Buttons number={'1'}/>
      <Buttons number={'2'}/>
      <Buttons number={'3'}/>
      <button value={"+"} className="gold">+</button>
      <Buttons number={'0'} span={spantwo}/>
      <Buttons number={'.'}/>

      <button value={"."} className="gold">=</button>
      </div>
     
    </div>
  );
}

export default App;
