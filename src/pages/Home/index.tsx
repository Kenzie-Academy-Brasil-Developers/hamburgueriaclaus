import { useContext } from "react";
import { Aside } from "../../components/Aside";
import { DontFindItem } from "../../components/DontFindItem";
import { Header } from "../../components/Header";
import { InfoSearch } from "../../components/InfoSearch";
import { ListProducts } from "../../components/ListProducts";
import { MainMarket } from "../../components/MainMarket";
import { CartContext } from "../../contexts/CartContext";

export function Home() {
    const {
        isSearchFinish,
        itemDoesNotExist,
      } = useContext(CartContext);
    
    return (
        <>
            <Header/>
            {isSearchFinish ? <InfoSearch/> : <></> }
            <MainMarket>
                {
                    (itemDoesNotExist && <DontFindItem/>) ||
                    (<ListProducts/>)
                }
                <Aside/>
            </MainMarket>
        </>
    )
}