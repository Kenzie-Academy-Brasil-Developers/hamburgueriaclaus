import { useContext } from 'react';
import { Aside } from './components/Aside';
import { Header } from './components/Header';
import { ListProducts } from './components/ListProducts';
import { Main } from './components/Main';
import { GlobalStyle } from './styles/Global';
import { DontFindItem } from './components/DontFindItem';
import { InfoSearch } from './components/InfoSearch';
import { CartContext } from './contexts/CartContext';

export function App() {
  const {
    isSearchFinish,
    itemDoesNotExist,
  } = useContext(CartContext);

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
