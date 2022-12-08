import { valueReal } from '../../generalFunctions';
import { CarTotalStyle, TotalPriceInfoStyle } from './styles';
import BtnDefaultGreyColor from '../BtnDefaultGreyColor';
import { useContext } from 'react';
import { BaseContext } from '../../contexts/Base';

function CarTotal() {
    const {
        carList,
        removeAllCar
    } = useContext(BaseContext);
    return (
        <CarTotalStyle>
            <TotalPriceInfoStyle>
                <h3>Total</h3>
                <h4>{valueReal(carList.length > 1 ? carList.reduce((acc, cur) => (acc.priceTotal || acc) + cur.priceTotal) : carList[0].priceTotal)}</h4>
            </TotalPriceInfoStyle>
            <BtnDefaultGreyColor classList='btnBig' action={removeAllCar}>Remover todos</BtnDefaultGreyColor>
        </CarTotalStyle>
    );
};

export default CarTotal;