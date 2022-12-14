import { useContext } from "react";
import { CartContext } from "../../../contexts/CartContext";
import { BtnLittle } from "../../BtnLittle";
import { CardStyle } from "./styles";
import { iCardCarProps } from "./types";

export function CardCar({ name, category, img, id, counter }: iCardCarProps) {
  const { removeCar, addCar } = useContext(CartContext);
  return (
    <CardStyle>
      <div>
        <picture>
          <img src={img} alt={name} />
        </picture>
        <div>
          <h3>{name}</h3>
          <legend>{category}</legend>
          <small>
            <button onClick={() => removeCar(id)}>-</button>
            {counter}
            <button onClick={() => addCar(id)}>+</button>
          </small>
        </div>
      </div>
      <BtnLittle
        classList="btnSmall"
        action={() => removeCar(id)}
        dataAction={id}
      >
        Remover
      </BtnLittle>
    </CardStyle>
  );
}
