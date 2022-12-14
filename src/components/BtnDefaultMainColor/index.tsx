import React from 'react';
import { ButtonStyle } from './styles';
import { iBtnMainColorProps } from './types';

export function BtnDefaultMainColor({ action , dataAction, children, classList , type }: iBtnMainColorProps) {
    return (
        <ButtonStyle type={type} className={classList} onClick={() => action(dataAction)}>
            {children}
        </ButtonStyle>
    );
};