import defaultLogo from "../../assets/burguerKenzie.svg";
import { ContImageStyle } from "./styles";
import desktopImg from "../../assets/burguerKenzieDesktop.svg";

export function ContImage() {
    return (
        <ContImageStyle>
            <img src={defaultLogo} alt='Burguer Kenzie' className="defaultImg"/>
            <img src={desktopImg} alt='' className="desktopImg"/>
        </ContImageStyle>
    )
}