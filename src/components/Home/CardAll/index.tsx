import { useContext } from 'react';
import { CartContext } from '../../../contexts/CartContext';
import { valueReal } from '../../../generalFunctions';
import { BtnDefaultMainColor } from '../../BtnDefaultMainColor';
import { CardStyle } from './styles';
import { iCardAllProps } from './types';

export function CardAll({ name, id, category, price, img }: iCardAllProps) {
  const { addCar } = useContext(CartContext);
  return (
    <CardStyle>
      <picture>
        <img src={img} alt={name} />
      </picture>
      <div>
        <h3>{name}</h3>
        <legend>{category}</legend>
        <h4>{valueReal(price)}</h4>
        <BtnDefaultMainColor
          classList='btnBig'
          dataAction={id}
          action={() => addCar(id)}
        >
          Adicionar
        </BtnDefaultMainColor>
      </div>
    </CardStyle>
  );
}
