import { ButtonStyle } from "./styles";

function BtnDefaultGreyColor({ action , children, classList }) {
    return (
        <ButtonStyle className={classList} oncClick={() => action()}>
                {children}
        </ButtonStyle>
    );
};

export default BtnDefaultGreyColor;