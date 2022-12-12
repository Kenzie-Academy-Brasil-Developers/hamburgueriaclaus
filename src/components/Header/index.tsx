import { ContainerHeadStyle, HeaderStyle } from './styles';
import logo from '../../assets/logo.svg';
import { InputSearch } from '../InputSearch';

export function Header() {
    return (
        <HeaderStyle>
            <ContainerHeadStyle>
                <img src={logo} alt='Burguer Kenzie'/>
                <InputSearch/>
            </ContainerHeadStyle>
        </HeaderStyle>
    );
};