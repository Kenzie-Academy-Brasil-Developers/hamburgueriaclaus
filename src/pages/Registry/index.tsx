import { Link } from "react-router-dom";
import { BtnDefaultGreyColor } from "../../components/BtnDefaultGreyColor";
import { ContImage } from "../../components/ContImage";
import { InputDefault } from "../../components/InputDefault";
import { FormStyle } from "../../styles/Form";
import { RegistryStyle } from "./styles";

export function Registry() {

    function test() {
        console.log('oi')
    }

    return (
        <div className="container">
            <RegistryStyle>
                <ContImage/>
                {/* <FormStyle noValidate>
                    <div>
                        <h1>Registry</h1>
                        <Link to='/login'>Retornar para o login</Link>
                    </div>
                    <InputDefault
                        id='name'
                        label="Nome"
                        type='text'
                        status="default"
                    />
                    <InputDefault
                        id='email'
                        label="Email"
                        type="email"
                        status="default"
                    />
                    <InputDefault
                        id='password'
                        label="Senha"
                        type="password"
                        status="default"
                    />
                    <InputDefault
                        id='passwordC'
                        label="Confirmar senha"
                        type='password'
                        status="default"
                    />
                    <BtnDefaultGreyColor classList='btnBig' action={test}>
                        Cadastrar
                    </BtnDefaultGreyColor>
                </FormStyle> */}
            </RegistryStyle>
        </div>
    )
}