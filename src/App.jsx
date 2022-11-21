import BtnDefaultGreyColor from "./components/BtnDefaultGreyColor";
import BtnDefaultMainColor from "./components/BtnDefaultMainColor";
import GlobalStyle from "./styles/global";
import "./styles/index.css";

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <BtnDefaultMainColor classList='btnBig'>
        Abacaxi
      </BtnDefaultMainColor>

      <br/>

      <BtnDefaultMainColor classList='btnMed'>
        sorvete
      </BtnDefaultMainColor>

      <br/>

      <BtnDefaultGreyColor classList='btnBig'>
        Uva
      </BtnDefaultGreyColor>
    </div>
  );
}

export default App;
