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
  const array = [
    {
      id: 1,
      name: "Hamburguer",
      category: "Sanduíches",
      price: 14,
      img: "https://i.imgur.com/Vng6VzV.png"
    },
    {
      id: 2,
      name: "X-Burguer",
      category: "Sanduíches",
      price: 16,
      img: "https://i.imgur.com/soOUeeW.png"
    },
    {
      id: 3,
      name: "Big Kenzie",
      category: "Sanduíches",
      price: 18,
      img: "https://i.imgur.com/eEzZzcF.png"
    },
    {
      id: 4,
      name: "Fanta Guaraná",
      category: "Bebidas",
      price: 5,
      img: "https://i.imgur.com/YuIbfCi.png"
    },
    {
      id: 5,
      name: "Coca-Cola",
      category: "Bebidas",
      price: 4.99,
      img: "https://i.imgur.com/KC2ihEN.png"
    },
    {
      id: 6,
      name: "Milkshake Ovomaltine",
      category: "Bebidas",
      price: 4.99,
      img: "https://i.imgur.com/iNkD4Pq.png"
    }
  ]
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
