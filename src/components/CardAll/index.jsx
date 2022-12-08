import { useContext } from 'react';
import { BaseContext } from '../../contexts/Base';
import { valueReal } from '../../generalFunctions';
import BtnDefaultMainColor from '../BtnDefaultMainColor';
import { CardStyle, CategoryStyle, ContainerImgStyle, CardInfoStyle, ImgStyle, ProductNameStyle, PriceStyle } from './styles';

function CardAll({ name , id, category , price , img}) {
    const {
        addCar
    } = useContext(BaseContext);
    return (
        <CardStyle>
            <ContainerImgStyle>
                <ImgStyle src={img} alt={name}/>
            </ContainerImgStyle>
            <CardInfoStyle>
                <ProductNameStyle>{name}</ProductNameStyle>
                <CategoryStyle>{category}</CategoryStyle>
                <PriceStyle>{valueReal(price)}</PriceStyle>
                <BtnDefaultMainColor classList='btnBig' dataAction={id} action={addCar}>Adicionar</BtnDefaultMainColor>
            </CardInfoStyle>
        </CardStyle>
    );
};

export default CardAll;