import { useContext, useState } from 'react';
import { CartContext } from '../../contexts/CartContext';
import BtnDefaultMainColor from '../BtnDefaultMainColor';
import { ContainerInputStyle, InputStyle } from './styles';

function InputSearch({ fun }) {
    const [valueInput, setValueInput] = useState('');
    const { filterWithThisName } = useContext(CartContext);
    return(
        <ContainerInputStyle>
            <InputStyle placeholder='Digite para pesquisar' onChange={(event) => setValueInput(event.target.value)}/>
            <BtnDefaultMainColor classList='btnMed' action={filterWithThisName} dataAction={valueInput}>Pesquisar</BtnDefaultMainColor>
        </ContainerInputStyle>
    );
};

export default InputSearch;