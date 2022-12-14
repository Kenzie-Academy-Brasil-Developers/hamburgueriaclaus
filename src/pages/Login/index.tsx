import { BtnDefaultMainColor } from "../../components/BtnDefaultMainColor";
import { ContImage } from "../../components/ContImage";
import { InputDefault } from "../../components/InputDefault";
import { LinkDefaultGreyColor } from "../../components/LinkDefaultGreyColor";
import { FormStyle } from "../../styles/Form";
import { LoginStyle } from "./styles";
import { iInputStatus , iFormValues } from "./types";
import { useForm , SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from "react";
import { formSchema } from "./schema";
import { api } from "../../services/api";

export function Login() {
    const [load, setLoad] = useState(false);

    const { register , handleSubmit , watch ,  formState: { errors } } = useForm<iFormValues>({
        mode: 'onChange',
        resolver: yupResolver(formSchema)
    });
    
    const submit: SubmitHandler<iFormValues> = async (currData) => { 
        console.log(currData) 
        setLoad(true);
        try {
            const {data}: any = await api.post('/login', currData);
            console.log(data)
        } catch(error) {
            console.log(error)
        } finally {
            console.log('foi')//fazer o toast provider e os toasts de sucesso e erro
            setLoad(false);
        }
    }

    return (
        <div className="container">
            <LoginStyle>
                    <FormStyle onSubmit={handleSubmit(submit)} noValidate>
                        <h1>Login</h1>
                        <InputDefault
                            id='email'
                            type='email'
                            label='Email'
                            status='default'
                            disabled={load}
                            currInputValue={watch(['email'])[0] || ''}
                            error={errors.email?.message}
                            register={register('email')}
                        />
                        <InputDefault
                            id='password'
                            type='password'
                            label='Senha'
                            status='default'
                            disabled={load}
                            currInputValue={watch(['password'])[0] || ''}
                            error={errors.password?.message}
                            register={register('password')}
                        />
                        <BtnDefaultMainColor classList="btnBig" type='submit' action={() => null}>
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