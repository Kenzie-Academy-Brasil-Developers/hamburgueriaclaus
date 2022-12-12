import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { BtnLittle } from '../BtnLittle';
import { CardDescriptionStyle, CardStyle, CategoryStyle, ContainerCardInfoStyle, ContainerImgStyle, ImgStyle, ProductNameStyle } from "./styles";

interface iCardProps {
    name: string;
    category: string;
    img: string;
    id: number;
    counter?: number;
}

export function CardCar({ name , category , img , id , counter }: iCardProps) {
    const { 
        removeCar
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
                    <small>{counter}</small>
                </ContainerCardInfoStyle>
            </CardDescriptionStyle>
            <BtnLittle classList='btnSmall' action={() => removeCar(id)} dataAction={id}>Remover</BtnLittle>
        </CardStyle>
    );
};