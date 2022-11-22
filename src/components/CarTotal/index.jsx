import { valueReal } from '../../generalFunctions';
import { CarTotalStyle, TotalPriceInfoStyle } from './styles';
import BtnDefaultGreyColor from '../BtnDefaultGreyColor';

function CarTotal({ listToBuy }) {
    return (
        <CarTotalStyle>
            <TotalPriceInfoStyle>
                <h3>Total</h3>
                <h4>{valueReal(listToBuy.length > 1 ? listToBuy.reduce((acc, cur) => (acc.price || acc) + cur.price) : listToBuy[0].price)}</h4>
            </TotalPriceInfoStyle>
            <BtnDefaultGreyColor classList='btnBig'>
                Remover todos
            </BtnDefaultGreyColor>
        </CarTotalStyle>
    );
};

export default CarTotal;