import React from 'react';
import { ButtonStyle } from './styles';
import { iBtnGreyColorProps } from './types';

export function BtnDefaultGreyColor({ action , children, classList , type , disabled }: iBtnGreyColorProps) {
    return (
        <ButtonStyle className={classList} onClick={action} type={type} disabled={disabled}>
            {children}
        </ButtonStyle>
    );
};