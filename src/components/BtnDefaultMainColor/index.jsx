import { ButtonStyle } from './styles';

function BtnDefaultMainColor({ action , children, classList }) {
    return (
        <ButtonStyle className={classList} onClick={() => action()}>
            {children}
        </ButtonStyle>
    );
};

export default BtnDefaultMainColor;