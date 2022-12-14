import React, { createContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { iUserContext, iUserProviderProps, iUser, iFormValuesLogin, iLoginResponse } from "./types";
import { SubmitHandler } from 'react-hook-form';
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export const UserContext = createContext({} as iUserContext);

export function UserProvider({ children }: iUserProviderProps) {
    const [user, setUser] = useState<iUser | null>(null);
    const [loadingGlobal, setLoadingGlobal] = useState(false);
    const [loadingForm, setLoadForm] = useState(false);
    const [successProcess, setSuccessProcess] = useState(false);
    const [logout, setLogout] = useState(false);
    const [canLogin, setCanLogin] = useState(false);
    const navigate = useNavigate();

    const submitLogin: SubmitHandler<iFormValuesLogin> = async (currData) => {
        setLoadForm(true);
        toast.loading('Carregando...', {toastId: 'load'})
        try {
            const { data } = await api.post<iLoginResponse>('/login', currData);
            const token = data.accessToken;
            localStorage.setItem('@token', token);
            api.defaults.headers.common['Authorization'] = token;
            setUser(data.user);
            toast.success('Login realizado com sucesso');
            setLoadForm(false);
            setSuccessProcess(true);
            setCanLogin(true);
            navigate('/marketplace')
        } catch(error) {
            console.log(error);
            toast.error('Erro! Verifique as informações e tente novamente');
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
                    const response = await api.get('/users/1', {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    });
                    setUser(response.data);
                    const { email , name , id } = response.data;
                    setUser({email, name, id}); 
                    setCanLogin(true);
                    navigate('/marketplace');
                } catch(error) {
                    console.log(error);
                }
            } 
        }())    
    }, [logout]);


    function clearUserInfo() {
        setCanLogin(false);
        localStorage.clear();
        setLogout(true);
        navigate('/');
        setTimeout(() => setLogout(false), 2000);
    }

    return (
        <UserContext.Provider value={{
            user,
            loadingForm,
            loadingGlobal,
            successProcess,
            submitLogin,
            clearUserInfo,
            canLogin
        }}>
            {children}
        </UserContext.Provider>
    )
}