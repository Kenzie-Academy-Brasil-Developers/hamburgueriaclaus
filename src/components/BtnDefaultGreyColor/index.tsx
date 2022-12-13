import React from 'react';
import { ButtonStyle } from './styles';
import { iBtnGreyColorProps } from './types';

export function BtnDefaultGreyColor({ action , children, classList }: iBtnGreyColorProps) {
    return (
        <ButtonStyle className={classList} onClick={action}>
            {children}
        </ButtonStyle>
    );
};