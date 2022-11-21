import BtnDefaultMainColor from '../BtnDefaultMainColor';
import { ContainerInputStyle, InputStyle } from './styles';

function InputSearch({ valueInput , fun }) {
    return(
        <ContainerInputStyle>
            <InputStyle placeholder='Digite para pesquisar' value={valueInput}/>
            <BtnDefaultMainColor classList='btnMed' action={() => fun()}>Pesquisar</BtnDefaultMainColor>
        </ContainerInputStyle>
    );
};

export default InputSearch;