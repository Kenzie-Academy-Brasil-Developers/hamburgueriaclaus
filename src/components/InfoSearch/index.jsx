import { InfoStyle } from "./style";
import BtnDefaultMainColor from "../BtnDefaultMainColor";

function InfoSearch({ many , name , action }) {
    return (
    <InfoStyle className="container">
        <h2><span>{many}</span> {many === 1? 'resultado' : 'resultados'} para: <span>{name}</span></h2>
        <BtnDefaultMainColor classList='btnBig' action={action}>Limpar busca</BtnDefaultMainColor>
    </InfoStyle>
    );
};

export default InfoSearch;