import React from 'react';
import { ButtonStyle } from './styles';
import { iBtnMainColorProps } from './types';

export function BtnDefaultMainColor({ action , dataAction, children, classList , type , disabled }: iBtnMainColorProps) {
    return (
        <ButtonStyle type={type} className={classList} disabled={disabled} onClick={() => action(dataAction)}>
            {children}
        </ButtonStyle>
    );
};