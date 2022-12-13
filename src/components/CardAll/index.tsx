import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { valueReal } from '../../generalFunctions';
import { BtnDefaultMainColor } from '../BtnDefaultMainColor';
import { CardStyle, CategoryStyle, ContainerImgStyle, CardInfoStyle, ImgStyle, ProductNameStyle, PriceStyle } from './styles';
import { iCardAllProps } from './types';

export function CardAll({ name , id, category , price , img}: iCardAllProps) {
    const {
        addCar
    } = useContext(CartContext);
    return (
        <CardStyle>
            <ContainerImgStyle>
                <ImgStyle src={img} alt={name}/>
            </ContainerImgStyle>
            <CardInfoStyle>
                <ProductNameStyle>{name}</ProductNameStyle>
                <CategoryStyle>{category}</CategoryStyle>
                <PriceStyle>{valueReal(price)}</PriceStyle>
                <BtnDefaultMainColor classList='btnBig' dataAction={id} action={() => addCar(id)}>Adicionar</BtnDefaultMainColor>
            </CardInfoStyle>
        </CardStyle>
    );
};