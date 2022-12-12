import React from 'react';
import { BtnStyle } from './styles';

interface iBtnProps {
    action: (dataAction ?: number | string) => void;
    dataAction?: number | string;
    children: React.ReactNode;
    classList: string;
}

// action: (dataAction?: string) => void;
// dataAction?: string;

export function BtnLittle({ action , dataAction , children , classList }: iBtnProps) {
    return (
        <BtnStyle className={classList} onClick={() => action(dataAction)}>
            {children}
        </BtnStyle>
    );
};