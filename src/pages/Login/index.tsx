import { BtnDefaultMainColor } from "../../components/BtnDefaultMainColor";
import { ContImage } from "../../components/ContImage";
import { InputDefault } from "../../components/InputDefault";
import { LinkDefaultGreyColor } from "../../components/LinkDefaultGreyColor";
import { FormStyle } from "../../styles/Form";
import { LoginStyle } from "./styles";
import { iInputStatus } from "./types";


export function Login() {

    function signIn() {
        console.log('entrou')
    }

    return (
        <div className="container">
            <LoginStyle>
                    <FormStyle>
                        <h1>Login</h1>
                        <InputDefault
                            id='email'
                            type='email'
                            label='Email'
                            status='default'
                            placeholder='Digite o email'
                        />
                        <InputDefault
                            id='password'
                            type='password'
                            label='Senha'
                            status='default'
                            placeholder='Digite a senha'
                        />
                        <BtnDefaultMainColor classList="btnBig" action={signIn}>
                            Logar
                        </BtnDefaultMainColor>
                        <legend>
                            Crie sua conta para saborear muitas delícias e matar sua fome!
                        </legend>
                        <LinkDefaultGreyColor classList='btnBig' destination={'/registry'}>
                            Cadastrar
                        </LinkDefaultGreyColor>
                    </FormStyle>
                    <ContImage/>
            </LoginStyle>
        </div>
    )
}