import { ButtonStyle } from "./styles";

function BtnDefaultMainColor({ action , children }) {
    return (
        <div>
            <ButtonStyle className="btnCommon" oncClick={() => action()}>
                {children}
            </ButtonStyle>
        </div>
    );
};

export default BtnDefaultMainColor;