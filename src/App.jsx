import Aside from './components/Aside';
import BtnDefaultGreyColor from './components/BtnDefaultMainColor';
import BtnDefaultMainColor from './components/BtnDefaultMainColor';
import CardAll from './components/CardAll';
import CardCar from './components/CardCar';
import Header from './components/Header';
import InputSearch from './components/InputSearch';
import ListProducts from './components/ListProducts';
import Main from './components/Main';
import GlobalStyle from './styles/global';
import './styles/index.css';

function App() {
  
  function con() {
    console.log("oi")
  }
  return (
    <div className='App'>
      <GlobalStyle/>
      <Header/>
      <Main>
        <ListProducts ArrayProducts={array} fun={con}/>
        <Aside listToBuy={array}/>
      </Main>
    </div>
  );
}

export default App;
