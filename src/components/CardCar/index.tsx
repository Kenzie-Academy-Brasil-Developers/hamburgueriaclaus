import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { BtnLittle } from '../BtnLittle';
import { CardDescriptionStyle, CardStyle, CategoryStyle, ContainerCardInfoStyle, ContainerImgStyle, ImgStyle, ProductNameStyle } from "./styles";
import { iCardCarProps } from './types';

export function CardCar({ name , category , img , id , counter }: iCardCarProps) {
    const { 
        removeCar,
        addCar
    } = useContext(CartContext);
    return (
        <CardStyle>
            <CardDescriptionStyle>
                <ContainerImgStyle>
                    <ImgStyle src={img} alt={name}/>
                </ContainerImgStyle>
                <ContainerCardInfoStyle>
                    <ProductNameStyle>{name}</ProductNameStyle>
                    <CategoryStyle>{category}</CategoryStyle>
                    <small>
                        <button onClick={() => removeCar(id)}>-</button>
                        {counter}
                        <button onClick={() => addCar(id)}>+</button>
                    </small>
                </ContainerCardInfoStyle>
            </CardDescriptionStyle>
            <BtnLittle classList='btnSmall' action={() => removeCar(id)} dataAction={id}>Remover</BtnLittle>
        </CardStyle>
    );
};