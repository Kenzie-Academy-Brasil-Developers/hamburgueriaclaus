import { ButtonStyle } from './styles';

function BtnDefaultMainColor({ action , dataAction, children, classList }) {
    return (
        <ButtonStyle className={classList} onClick={() => action(dataAction)}>
            {children}
        </ButtonStyle>
    );
};

export default BtnDefaultMainColor;