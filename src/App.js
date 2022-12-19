import './App.css';
import BotaoDoe from './Components/BotaoDoe';
import QuemSomos from './Components/QuemSomos';
import Rodape from './Components/rodape';
import Slider from './Components/Slider/Slider'
import BotoesTopo from './Components/Topo';



function App() {
  return (
    <>
      <Slider />
      <BotoesTopo/>
      <BotaoDoe/>
      <QuemSomos/>
      <Rodape/>
    </>
  );
}

export default App;