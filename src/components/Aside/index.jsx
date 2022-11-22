import { useState } from 'react';
import CardCar from '../CardCar';
import CarTotal from '../CarTotal';
import { AsideStyle, CarEmptyStyle, CarListStyle, CarStyle, HeadAsideStyle } from './style';

function Aside({ action , listToBuy }) {
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
                    {listToBuy.map(({ name, category , img , fun, id }) => 
                        <CardCar key={id} name={name} category={category} img={img}/>
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