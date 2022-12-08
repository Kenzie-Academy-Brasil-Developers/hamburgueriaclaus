import { useContext } from 'react';
import { BaseContext } from '../../contexts/Base';
import BtnLittle from '../BtnLittle';
import { CardDescriptionStyle, CardStyle, CategoryStyle, ContainerCardInfoStyle, ContainerImgStyle, ImgStyle, ProductNameStyle } from "./styles";

function CardCar({ name , category , img , id , counter }) {
    const { 
        removeCar
    } = useContext(BaseContext);
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
            <BtnLittle classList='btnSmall' action={removeCar} dataAction={id}>Remover</BtnLittle>
        </CardStyle>
    );
};

export default CardCar;