import { ButtonStyle } from "./styles";

function BtnDefaultMainColor({ action , children, classList }) {
    return (
        <ButtonStyle className={classList} oncClick={() => action()}>
                {children}
        </ButtonStyle>
    );
};

export default BtnDefaultMainColor;