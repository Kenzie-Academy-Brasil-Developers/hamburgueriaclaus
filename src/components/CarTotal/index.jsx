import { valueReal } from '../../generalFunctions';
import { CarTotalStyle, TotalPriceInfoStyle } from './styles';
import BtnDefaultGreyColor from '../BtnDefaultGreyColor';

function CarTotal({ listToBuy , action }) {
    return (
        <CarTotalStyle>
            <TotalPriceInfoStyle>
                <h3>Total</h3>
                <h4>{valueReal(listToBuy.length > 1 ? listToBuy.reduce((acc, cur) => (acc.priceTotal || acc) + cur.priceTotal) : listToBuy[0].priceTotal)}</h4>
            </TotalPriceInfoStyle>
            <BtnDefaultGreyColor classList='btnBig' action={action}>
                Remover todos
            </BtnDefaultGreyColor>
        </CarTotalStyle>
    );
};

export default CarTotal;