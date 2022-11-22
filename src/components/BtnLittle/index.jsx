import { BtnStyle } from './styles';

function BtnLittle({ action ,  children , classList }) {
    return (
        <BtnStyle className={classList} onClick={() => action()}>
            {children}
        </BtnStyle>
    );
};

export default BtnLittle;