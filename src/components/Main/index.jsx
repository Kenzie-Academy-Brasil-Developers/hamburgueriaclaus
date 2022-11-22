import { MainStyles } from "./styles";

function Main({ children }) {
    return (
        <MainStyles className="container">
            {children}
        </MainStyles>
    );
};

export default Main;