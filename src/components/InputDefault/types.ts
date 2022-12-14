import { UseFormRegisterReturn } from 'react-hook-form';

type tOptionsRegister = 'password' | 'email' | 'name' | 'passwordC'; 

export interface iInputDefaultPros {
    id: string;
    label: string;
    type: string;
    status: string;
    disabled: boolean;
    register: UseFormRegisterReturn<tOptionsRegister>;
    error?: string;
    currInputValue: string;
}

export interface iStyledProps {
    currColor: string;
    currValue: string;
    disabled: boolean;
}