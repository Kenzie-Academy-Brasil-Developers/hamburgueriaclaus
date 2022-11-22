import { useState } from 'react';
import CardCar from '../CardCar';
import CarTotal from '../CarTotal';
import { AsideStyle, CarEmptyStyle, CarListStyle, CarStyle, HeadAsideStyle } from './style';

function Aside({ action , listToBuy }) {
    const [listKeys, setListKeys] = useState([]);
    function handleProducts() {
        
    }
    return (
        <AsideStyle>
            <HeadAsideStyle>
                <h2>Carrinho de compras</h2>
            </HeadAsideStyle>
            <CarStyle>
                {
                listToBuy.length === 0 ? 
                <CarEmptyStyle>
                   <h3>Sua sacola está vazia</h3>
                   <legend>Adicione itens</legend>
                </CarEmptyStyle>
                
                : 
                <>
                <CarListStyle>
                    
                    {
                    listToBuy.map(({ name, category , img , id , reactKey }) => {
                        if (listKeys.includes(reactKey) === false) {
                            setListKeys([...listKeys, reactKey])
                        } else {
                            reactKey += Math.random();
                        }
                        return <CardCar key={reactKey} fun={action} name={name} category={category} img={img} id={id} />
                    }
                    )}
                </CarListStyle>
                <CarTotal listToBuy={listToBuy}/> 
                </>
                 }
            </CarStyle>
        </AsideStyle>
    );
};

export default Aside;