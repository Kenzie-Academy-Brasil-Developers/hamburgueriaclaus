import { useContext } from 'react';
import { BaseContext } from '../../contexts/Base';
import CardCar from '../CardCar';
import CarTotal from '../CarTotal';
import { AsideStyle, CarEmptyStyle, CarListStyle, CarStyle, HeadAsideStyle } from './style';

function Aside() {
    const {
        carList
    } = useContext(BaseContext);
    return (
        <AsideStyle>
            <HeadAsideStyle>
                <h2>Carrinho de compras</h2>
            </HeadAsideStyle>
            <CarStyle>
                {
                carList.length === 0 ? 
                <CarEmptyStyle>
                   <h3>Sua sacola está vazia</h3>
                   <legend>Adicione itens</legend>
                </CarEmptyStyle>
                
                : 
                <>
                <CarListStyle>
                    {
                    carList.map(({ name, category , img , id , counter, reactKey }) => 
                        <CardCar key={reactKey} name={name} category={category} counter={counter} img={img} id={id} />
                    )}                    
                </CarListStyle>
                <CarTotal/> 
                </>
                 }
            </CarStyle>
        </AsideStyle>
    );
};

export default Aside;