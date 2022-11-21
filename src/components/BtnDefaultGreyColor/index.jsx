import { ButtonStyle } from "./styles";

function BtnDefaultGreyColor({ action , children }) {
    return (
        <div>
            <ButtonStyle className="btnCommon" oncClick={() => action()}>
                {children}
            </ButtonStyle>
        </div>
    );
};

export default BtnDefaultGreyColor;