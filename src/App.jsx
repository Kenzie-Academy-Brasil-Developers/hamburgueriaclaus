import { useContext, useEffect, useState } from 'react';
import Aside from './components/Aside';
import Header from './components/Header';
import ListProducts from './components/ListProducts';
import Main from './components/Main';
import GlobalStyle from './styles/global';
import './styles/index.css';

import api from './services/api';
import DontFindItem from './components/DontFindItem';
import InfoSearch from './components/InfoSearch';
import { BaseContext } from './contexts/Base';

function App() {
  const {
    currentList, 
    filterWithThisName,
    isSearchFinish,
    stopSearch,
    currentInfoSearch,
    itemDoesNotExist,
    carList,
    removeCar,
    addCar,
    removeAllCar
} = useContext(BaseContext);

  return (
    <div className='App'>
      <GlobalStyle/>
      <Header/>
        {isSearchFinish ? <InfoSearch/> : <></> }
      <Main>
          {
            (itemDoesNotExist && <DontFindItem/>) ||
            (<ListProducts/>)
          }
        <Aside/>
      </Main>
    </div>
  );
}

export default App;
