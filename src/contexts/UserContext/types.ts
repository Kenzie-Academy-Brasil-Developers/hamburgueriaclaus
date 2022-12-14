import React from "react";
import { SubmitHandler } from "react-hook-form";

export interface iUserProviderProps {
    children: React.ReactNode;
}

export interface iUser {
    email: string;
    name: string;
    id: number;
}

export interface iFormValuesLogin {
    email: string;
    password: string;
}

export interface iUserContext {
    user: iUser | null;
    loadingGlobal: boolean;
    loadingForm: boolean;
    successProcess: boolean;
    canLogin: boolean;
    submitLogin: (currData: iFormValuesLogin) => Promise<void>;
    clearUserInfo(): void;
}

export interface iLoginResponse {
    accessToken: string;
    user: iUser;
}