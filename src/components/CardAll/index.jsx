import { valueReal } from "../../generalFunctions";
import BtnDefaultMainColor from "../BtnDefaultMainColor";
import { CardStyle, CategoryStyle, ContainerImgStyle, CardInfoStyle, ImgStyle, ProductNameStyle, PriceStyle } from "./styles";

function CardAll({ name , category , price , img }) {
    return (
        <CardStyle>
            <ContainerImgStyle>
                <ImgStyle src={img} alt={name}/>
            </ContainerImgStyle>
            <CardInfoStyle>
                <ProductNameStyle>{name}</ProductNameStyle>
                <CategoryStyle>{category}</CategoryStyle>
                <PriceStyle>{valueReal(price)}</PriceStyle>
                <BtnDefaultMainColor classList='btnBig'>Adicionar</BtnDefaultMainColor>
            </CardInfoStyle>
        </CardStyle>
    );
};

export default CardAll;