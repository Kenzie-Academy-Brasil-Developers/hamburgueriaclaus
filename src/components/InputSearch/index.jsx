import { useContext, useState } from 'react';
import { BaseContext } from '../../contexts/Base';
import BtnDefaultMainColor from '../BtnDefaultMainColor';
import { ContainerInputStyle, InputStyle } from './styles';

function InputSearch({ fun }) {
    const [valueInput, setValueInput] = useState('');
    const { filterWithThisName } = useContext(BaseContext);
    return(
        <ContainerInputStyle>
            <InputStyle placeholder='Digite para pesquisar' onChange={(event) => setValueInput(event.target.value)}/>
            <BtnDefaultMainColor classList='btnMed' action={filterWithThisName} dataAction={valueInput}>Pesquisar</BtnDefaultMainColor>
        </ContainerInputStyle>
    );
};

export default InputSearch;