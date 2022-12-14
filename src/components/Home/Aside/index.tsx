import { useContext } from "react";
import { CartContext } from "../../../contexts/CartContext";
import { CardCar } from "../CardCar";
import { CarTotal } from "../CarTotal";
import {
  AsideStyle,
  CarEmptyStyle,
  CarListStyle,
} from "./style";

export function Aside() {
  const { carList } = useContext(CartContext);
  return (
    <AsideStyle>
      <div className="headAsideStyle">
        <h2>Carrinho de compras</h2>
      </div>
      <div className="carStyle">
        {carList.length === 0 ? (
          <CarEmptyStyle>
            <h3>Sua sacola está vazia</h3>
            <legend>Adicione itens</legend>
          </CarEmptyStyle>
        ) : (
          <>
            <CarListStyle>
              {carList.map(({ name, category, img, id, counter, reactKey }) => (
                <CardCar
                  key={reactKey}
                  name={name}
                  category={category}
                  counter={counter}
                  img={img}
                  id={id}
                />
              ))}
            </CarListStyle>
            <CarTotal />
          </>
        )}
      </div>
    </AsideStyle>
  );
}
