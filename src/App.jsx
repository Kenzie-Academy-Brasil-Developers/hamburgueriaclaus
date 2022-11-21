import BtnDefaultMainColor from "./components/BtnDefaultMainColor";
import GlobalStyle from "./styles/global";
import "./styles/index.css";

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <BtnDefaultMainColor>
        Abacaxi
      </BtnDefaultMainColor>
    </div>
  );
}

export default App;
