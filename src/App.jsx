import { useEffect, useState } from 'react';
import Aside from './components/Aside';
import Header from './components/Header';
import ListProducts from './components/ListProducts';
import Main from './components/Main';
import GlobalStyle from './styles/global';
import './styles/index.css';
import imagePlaceholder from './assets/placeholderProduct.png';
import api from './services/api';
import DontFindItem from './components/DontFindItem';
import InfoSearch from './components/InfoSearch';

function App() {
  const [ currentList, setCurrentList ] = useState([
    {
      id: 0,
      name: 'Loading',
      category: '...',
      price: 0,
      priceTotal: 0,
      reactKey: Math.random(),
      img: imagePlaceholder
    }
  ]);
  const [completeList, setCompleteList] = useState([]); 
  const [itemDoesNotExist, setItemDoesNotExist] = useState(false);
  const [isSearchFinish, setIsSearchFinish] = useState(false);
  const [currentInfoSearch, setCurrentInfoSearch] = useState([]);
  const [carList, setCarlist] = useState([]);

  useEffect(() => {
    api.get('products')
      .then(response => {
        const listFormatToReact = response.data.map((el) => {
          el.reactKey = Math.random();
          el.counter = 1;
          el.priceTotal = el.price;
          return el;
        });
        setCurrentList(listFormatToReact);
        setCompleteList(listFormatToReact);

      })
      .catch(error => console.log(error));
  }, []);
    
    

  function removeCar(identifier) {
    const visibleList = [...currentList];
    const ListHandle = carList.filter(({id}) => id !== identifier);
    const productToRemove = carList.find((({id}) => id === identifier));
    if (productToRemove.counter > 1) {
      productToRemove.counter -= 1;
      productToRemove.priceTotal = productToRemove.price * productToRemove.counter;
      ListHandle.push(productToRemove);
    }
    setCarlist(ListHandle);
    setCurrentList(visibleList);
  };

  function addCar(identifier) {
    const visibleList = [...currentList];
    const alreadyInCarList = carList.find(({id}) => id === identifier);
    if (alreadyInCarList === undefined) {
      const currentCarProduct = completeList.find(({id}) => id === identifier);
      setCarlist([...carList, currentCarProduct]);
    } else {
      alreadyInCarList.counter += 1;
      alreadyInCarList.priceTotal = alreadyInCarList.counter * alreadyInCarList.price;
      const cleanList = carList.filter(({id}) => id !== identifier);
      setCarlist([...cleanList, alreadyInCarList]);
    };
    setCurrentList(visibleList);
  };

  function removeAllCar() {
    const ListHandle = currentList.map(el => {
      el.priceTotal = el.price;
      el.counter = 1;
      return el
    });
    setCarlist([]);
    setCurrentList(ListHandle);
  };

  function filterWithThisName(nameToSearch) {
      setItemDoesNotExist(false);
      const listFiltered = [...completeList].filter(({name}) => name.toLowerCase().includes(nameToSearch.toLowerCase()));
      if (listFiltered.length === 0) {
        setItemDoesNotExist(true);
      } else {
        setIsSearchFinish(true);
        setCurrentList(listFiltered);
        const info = { name: nameToSearch, many: listFiltered.length };
        setCurrentInfoSearch([info]);
      };
  };

  function stopSearch() {
    setItemDoesNotExist(false);
    setIsSearchFinish(false);
    setCurrentList(completeList);
  };

  return (
    <div className='App'>
      <GlobalStyle/>
      <Header fun={filterWithThisName}/>
        {isSearchFinish ? <InfoSearch action={stopSearch} name={currentInfoSearch[0].name} many={currentInfoSearch[0].many}/> : <></> }
      <Main>
          {
            (itemDoesNotExist && <DontFindItem/>) ||
            (<ListProducts ArrayProducts={currentList} fun={addCar}/>)
          }
        <Aside listToBuy={carList} action={removeCar} fun={removeAllCar}/>
      </Main>
    </div>
  );
}

export default App;
