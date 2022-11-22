import CardCar from '../CardCar';
import CarTotal from '../CarTotal';
import { AsideStyle, CarEmptyStyle, CarListStyle, CarStyle, HeadAsideStyle } from './style';

function Aside({ action , listToBuy , fun }) {
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
                    listToBuy.map(({ name, category , img , id , counter, reactKey }) => 
                        <CardCar key={reactKey} fun={action} name={name} category={category} counter={counter} img={img} id={id} />
                    )}                    
                </CarListStyle>
                <CarTotal listToBuy={listToBuy} action={fun}/> 
                </>
                 }
            </CarStyle>
        </AsideStyle>
    );
};

export default Aside;