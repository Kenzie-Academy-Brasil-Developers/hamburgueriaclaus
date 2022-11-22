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
        setCurrentList(response.data);
        setCompleteList(response.data);
      })
      .catch(error => console.log(error))
  }, []);
    
    


  

  function addCar(identifier) {
    console.log(identifier)
  }

  function filterWithThisName(nameToSearch) {
      setItemDoesNotExist(false);
      const listFiltered = completeList.filter(({name}) => name.toLowerCase().includes(nameToSearch.toLowerCase()));
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
        <Aside listToBuy={carList}/>
      </Main>
    </div>
  );
}

export default App;
