import { useState } from 'react';
import BtnDefaultMainColor from '../BtnDefaultMainColor';
import { ContainerInputStyle, InputStyle } from './styles';

function InputSearch({ fun }) {
    const [valueInput, setValueInput] = useState('');
    
    return(
        <ContainerInputStyle>
            <InputStyle placeholder='Digite para pesquisar' onChange={(event) => setValueInput(event.target.value)}/>
            <BtnDefaultMainColor classList='btnMed' action={fun} dataAction={valueInput}>Pesquisar</BtnDefaultMainColor>
        </ContainerInputStyle>
    );
};

export default InputSearch;