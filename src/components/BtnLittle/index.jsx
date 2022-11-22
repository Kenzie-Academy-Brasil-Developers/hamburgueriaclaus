import { BtnStyle } from './styles';

function BtnLittle({ action , dataAction , children , classList }) {
    return (
        <BtnStyle className={classList} onClick={() => action(dataAction)}>
            {children}
        </BtnStyle>
    );
};

export default BtnLittle;