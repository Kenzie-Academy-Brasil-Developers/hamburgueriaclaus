import { useContext } from 'react';
import { Aside } from '../../components/Home/Aside';
import { DontFindItem } from '../../components/Home/DontFindItem';
import { Header } from '../../components/Home/Header';
import { InfoSearch } from '../../components/Home/InfoSearch';
import { ListProducts } from '../../components/Home/ListProducts';
import { MainMarket } from '../../components/Home/MainMarket';
import { CartContext } from '../../contexts/CartContext';

export function Home() {
  const { isSearchFinish, itemDoesNotExist } = useContext(CartContext);

  return (
    <>
      <Header />
      {isSearchFinish ? <InfoSearch /> : <></>}
      <MainMarket>
        {(itemDoesNotExist && <DontFindItem />) || <ListProducts />}
        <Aside />
      </MainMarket>
    </>
  );
}
