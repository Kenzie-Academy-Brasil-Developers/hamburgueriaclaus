import BtnDefaultGreyColor from './components/BtnDefaultMainColor';
import BtnDefaultMainColor from './components/BtnDefaultMainColor';
import CardAll from './components/CardAll';
import InputSearch from './components/InputSearch';
import GlobalStyle from './styles/global';
import './styles/index.css';

function App() {
  return (
    <div className='App'>
      <GlobalStyle/>
      {/* <BtnDefaultMainColor classList='btnBig'>
        Abacaxi
      </BtnDefaultMainColor>

      <br/>

      <BtnDefaultMainColor classList='btnMed'>
        sorvete
      </BtnDefaultMainColor>

      <br/>

      <BtnDefaultGreyColor classList='btnBig'>
        Uva
      </BtnDefaultGreyColor> */}
      {/* <InputSearch/> */}
      <CardAll/>
    </div>
  );
}

export default App;
