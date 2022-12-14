import { BtnDefaultMainColor } from '../../components/BtnDefaultMainColor';
import { ContImage } from '../../components/ContImage';
import { InputDefault } from '../../components/InputDefault';
import { LinkDefaultGreyColor } from '../../components/LinkDefaultGreyColor';
import { FormStyle } from '../../styles/Form';
import { LoginStyle } from './styles';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useContext } from 'react';
import { formSchema } from './schema';
import { UserContext } from '../../contexts/UserContext';
import { iFormValuesLogin } from '../../contexts/UserContext/types';

export function Login() {

    const { user, submitLogin , loadingForm , successProcess } = useContext(UserContext);

    const { register , handleSubmit , watch ,  formState: { errors } } = useForm<iFormValuesLogin>({
        mode: 'onChange',
        resolver: yupResolver(formSchema)
    });
    
    return (
        <div className='container'>
            <LoginStyle>
                    <FormStyle onSubmit={handleSubmit(submitLogin)} noValidate>
                        <h1>Login</h1>
                        <InputDefault
                            id='email'
                            type='email'
                            label='Email'
                            disabled={loadingForm}
                            status={errors.email ? 'error' : successProcess ? 'success' : 'default'}
                            currInputValue={watch(['email'])[0] || ''}
                            error={errors.email?.message}
                            register={register('email')}
                        />
                        <InputDefault
                            id='password'
                            type='password'
                            label='Senha'
                            disabled={loadingForm}
                            status={errors.password ? 'error' : successProcess ? 'success' : 'default'}
                            currInputValue={watch(['password'])[0] || ''}
                            error={errors.password?.message}
                            register={register('password')}
                        />
                        <BtnDefaultMainColor disabled={loadingForm} classList='btnBig' type='submit' action={() => null}>
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