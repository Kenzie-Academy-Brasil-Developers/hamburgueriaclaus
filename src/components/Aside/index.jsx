import { useState } from "react";
import CardCar from "../CardCar";
import { AsideStyle, CarListStyle, CarStyle, HeadAsideStyle } from "./style";

function Aside({ action , listToBuy }) {
    const [isCarEmpty, setCarEmpty] = useState(false);

    return (
        <AsideStyle>
            <HeadAsideStyle>
                <h2>Carrinho de compras</h2>
            </HeadAsideStyle>
            <CarStyle>
                {(isCarEmpty && <h1>Olpa</h1>)
                
                || (<CarListStyle>
                    {listToBuy.map(({ name, category , img , fun }) => 
                        <CardCar name={name} category={category} img={img}/>
                    )}
                </CarListStyle>)  }
            </CarStyle>
        </AsideStyle>
    );
};

export default Aside;