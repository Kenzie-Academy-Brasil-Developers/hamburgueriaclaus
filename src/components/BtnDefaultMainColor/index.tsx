import React from 'react';
import { ButtonStyle } from './styles';

interface iBtnProps {
    action: (dataAction?: number | string) => void;
    children: React.ReactNode;
    classList: string;
    dataAction?: number | string;
}

export function BtnDefaultMainColor({ action , dataAction, children, classList }: iBtnProps) {
    return (
        <ButtonStyle className={classList} onClick={() => action(dataAction)}>
            {children}
        </ButtonStyle>
    );
};