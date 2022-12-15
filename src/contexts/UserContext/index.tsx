import { createContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { iUserContext, iUserProviderProps, iUser, iFormValuesLogin, iResponse, iFormValuesRegistry, iErrorAxios } from "./types";
import { SubmitHandler } from 'react-hook-form';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";

export const UserContext = createContext({} as iUserContext);

export function UserProvider({ children }: iUserProviderProps) {
    const [user, setUser] = useState<iUser | null>(null);
    const [loadingGlobal, setLoadingGlobal] = useState(true);
    const [loadingForm, setLoadForm] = useState(false);
    const [successProcess, setSuccessProcess] = useState(false);
    const [canLogin, setCanLogin] = useState(false);
    const navigate = useNavigate();

    const submitLogin: SubmitHandler<iFormValuesLogin> = async (currData) => {
        setLoadForm(true);
        toast.loading('Carregando...', {toastId: 'load'});
        try {
            const { data } = await api.post<iResponse>('/login', currData);
            const token = data.accessToken;
            localStorage.setItem('@token', token);
            setUser(data.user);
            toast.success('Login realizado com sucesso');
            setLoadForm(false);
            setSuccessProcess(true);
            setLoadingGlobal(false); 
            setCanLogin(true);
            navigate('/marketplace');
        } catch(error) {
            console.log(error);
            toast.error('Erro! Verifique as informações e tente novamente');
        } finally {
            toast.dismiss('load');
            setLoadForm(false);
            setTimeout(() => setSuccessProcess(false), 2000);
        }
    }

    const submitRegistry: SubmitHandler<iFormValuesRegistry> = async (currData) => {
        setLoadForm(true);
        toast.loading('Carregando...', {toastId: 'load'});
        try {
            const { data } = await api.post<iResponse>('/users', currData);
            const token = data.accessToken;
            localStorage.setItem('@token', token);    
            setUser(data.user);
            toast.success('Cadastro realizado com sucesso');
            setLoadForm(false);
            setSuccessProcess(true);
            setLoadingGlobal(false);
            setCanLogin(true);
            navigate('/marketplace');
        } catch(error) {
            const currError = error as AxiosError<iErrorAxios>;
            if (currError.response?.data + '' === 'Email already exists') {
                toast.error('Esse email já está cadastrado! Tente outro');
            } else {
                toast.error('Erro! Verifique as informações e tente novamente');
            }
        } finally {
            toast.dismiss('load');
            setLoadForm(false);
            setTimeout(() => setSuccessProcess(false), 2000);
        }
    }
    

    useEffect(() => {
        (async function() {
            const token = localStorage.getItem('@token');
            if (token) {
                try {
                    const response = await api.get('/products', {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    });
                    setUser(response.data);
                    setUser({email:'', name:'', id:0});
                    setLoadingGlobal(false); 
                    setCanLogin(true);
                    navigate('/marketplace');
                } catch(error) {
                    console.log(error);
                    setLoadingGlobal(false); 
                }
            } 
        }())    
    }, []);


    function clearUserInfo() {
        setCanLogin(false);
        localStorage.clear();
        navigate('/');
        setUser(null);
    }

    return (
        <UserContext.Provider value={{
            user,
            loadingForm,
            loadingGlobal,
            successProcess,
            submitLogin,
            clearUserInfo,
            submitRegistry,
            canLogin
        }}>
            {children}
        </UserContext.Provider>
    )
}