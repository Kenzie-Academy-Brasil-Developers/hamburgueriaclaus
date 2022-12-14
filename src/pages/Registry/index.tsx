import { yupResolver } from '@hookform/resolvers/yup';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { BtnDefaultGreyColor } from '../../components/BtnDefaultGreyColor';
import { ContImage } from '../../components/ContImage';
import { InputDefault } from '../../components/InputDefault';
import { UserContext } from '../../contexts/UserContext';
import { iFormValuesRegistry } from '../../contexts/UserContext/types';
import { FormStyle } from '../../styles/Form';
import { formSchema } from './schema';
import { RegistryStyle } from './styles';

export function Registry() {

    const { submitRegistry , loadingForm , successProcess } = useContext(UserContext);

    const { register, handleSubmit , watch , formState: { errors } } = useForm<iFormValuesRegistry>({
        mode: 'onChange',
        resolver: yupResolver(formSchema)
    });

    return (
        <div className='container'>
            <RegistryStyle>
                <ContImage/>
                <FormStyle onSubmit={handleSubmit(submitRegistry)} noValidate>
                    <div>
                        <h1>Cadastro</h1>
                        <Link to='/login'>Retornar para o login</Link>
                    </div>
                    <InputDefault
                        id='name'
                        label='Nome'
                        type='text'
                        disabled={loadingForm}
                        status={errors.name ? 'error' : successProcess ? 'success' : 'default'}
                        currInputValue={watch(['name'])[0] || ''}
                        error={errors.name?.message}
                        register={register('name')}
                    />
                    <InputDefault
                        id='email'
                        label='Email'
                        type='email'
                        disabled={loadingForm}
                        status={errors.email ? 'error' : successProcess ? 'success' : 'default'}
                        currInputValue={watch(['email'])[0] || ''}
                        error={errors.email?.message}
                        register={register('email')}
                    />
                    <InputDefault
                        id='password'
                        label='Senha'
                        type='password'
                        disabled={loadingForm}
                        status={errors.password ? 'error' : successProcess ? 'success' : 'default'}
                        currInputValue={watch(['password'])[0] || ''}
                        error={errors.password?.message}
                        register={register('password')}
                    />
                    <InputDefault
                        id='passwordC'
                        label='Confirmar senha'
                        type='password'
                        disabled={loadingForm}
                        status={errors.passwordC ? 'error' : successProcess ? 'success' : 'default'}
                        currInputValue={watch(['passwordC'])[0] || ''}
                        error={errors.passwordC?.message}
                        register={register('passwordC')}
                    />
                    <BtnDefaultGreyColor type='submit' classList='btnBig' disabled={loadingForm} action={() => null}>
                        Cadastrar
                    </BtnDefaultGreyColor>
                </FormStyle>
            </RegistryStyle>
        </div>
    )
}