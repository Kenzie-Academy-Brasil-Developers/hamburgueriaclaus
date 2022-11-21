import { valueReal } from "../../generalFunctions";
import BtnDefaultMainColor from "../BtnDefaultMainColor";
import { CardStyle } from "./styles";

function CardAll() {
    const currentCard = {
		id: 1,
		name: "Hamburguer",
		category: "Sanduíches",
		price: 14,
		img: "https://i.imgur.com/Vng6VzV.png"
	}
    const { name , category , price , img } = currentCard
    return (
        <CardStyle>
            <picture>
                <img src={img} alt={name}/>
            </picture>
            <div>
                <h3>{name}</h3>
                <legend>{category}</legend>
                <h4>{valueReal(price)}</h4>
                <BtnDefaultMainColor classList='btnBig'>Adicionar</BtnDefaultMainColor>
            </div>
        </CardStyle>
    )
};

export default CardAll;