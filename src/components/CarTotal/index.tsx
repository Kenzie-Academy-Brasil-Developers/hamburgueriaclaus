import { valueReal } from '../../generalFunctions';
import { CarTotalStyle, TotalPriceInfoStyle } from './styles';
import { BtnDefaultGreyColor } from '../BtnDefaultGreyColor';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

export function CarTotal() {
    const {
        carList,
        removeAllCar
    } = useContext(CartContext);

    return (
        <CarTotalStyle>
            <TotalPriceInfoStyle>
                <h3>Total</h3>
                <h4>{valueReal(carList.reduce((acc: number, cur: any) => acc + cur.priceTotal, 0))}</h4>
            </TotalPriceInfoStyle>
            <BtnDefaultGreyColor classList='btnBig' action={removeAllCar}>Remover todos</BtnDefaultGreyColor>
        </CarTotalStyle>
    );
};