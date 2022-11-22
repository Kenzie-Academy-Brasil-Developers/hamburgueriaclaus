import { ContainerHeadStyle, HeaderStyle } from './styles';
import logo from '../../assets/logo.svg';
import InputSearch from '../InputSearch';

function Header({ fun }) {
    return (
        <HeaderStyle>
            <ContainerHeadStyle>
                <img src={logo} alt='Burguer Kenzie'/>
                <InputSearch fun={fun}/>
            </ContainerHeadStyle>
        </HeaderStyle>
    );
};

export default Header;