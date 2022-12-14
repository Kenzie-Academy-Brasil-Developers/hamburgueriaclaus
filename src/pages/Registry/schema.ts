import * as yup from 'yup';

export const formSchema = yup.object().shape({
    name: yup
        .string()
        .required('O nome é obrigatório')
        .min(3, 'É preciso ter um nome válido'),
    email: yup
        .string()
        .required('O email é obrigatório')
        .email('Email inválido'),
    password: yup
        .string()
        .required('A senha é obrigatória')
        .min(6, 'Sua senha precisa ter no mínimo 6 caracteres')
        .matches(/(?=.*?[0-9])/, 'É necessário um número')
        .matches(/(?=.*?[A-Z])/, 'É necessária uma letra maiúscula')
        .matches(/(?=.*?[a-z])/, 'É necessária uma letra minúscula')
        .matches(/(?=.*?[#?!@$%^&*-])/, 'É necessário um caractere especial'),
    passwordC: yup
        .string()
        .required('A confirmação de senha é obrigatória')
        .oneOf([yup.ref('password')], 'As senhas não coincidem')
});