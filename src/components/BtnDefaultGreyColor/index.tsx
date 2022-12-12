import React from 'react';
import { ButtonStyle } from './styles';

interface iBtnProps {
    action: () => void;
    children: React.ReactNode;
    classList: string;
}

export function BtnDefaultGreyColor({ action , children, classList }: iBtnProps) {
    return (
        <ButtonStyle className={classList} onClick={action}>
            {children}
        </ButtonStyle>
    );
};