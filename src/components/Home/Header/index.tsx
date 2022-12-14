import { HeaderStyle } from "./styles";
import logo from "../../../assets/logo.svg";
import { InputSearch } from "../InputSearch";
import { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";
import btnGoOut from "../../../assets/exitImg.svg";

export function Header() {
  const { clearUserInfo } = useContext(UserContext);
  
  return (
    <HeaderStyle>
      <div>
        <img src={logo} alt="Burguer Kenzie" />
        <div className="headerRight">
          <InputSearch/>
          <button onClick={clearUserInfo}>
            <img src={btnGoOut} alt='Sair'/>
          </button>
        </div>
      </div>
    </HeaderStyle>
  );
}
