import React from 'react';
import { ButtonStyle } from './styles';
import { iBtnMainColorProps } from './types';

export function BtnDefaultMainColor({ action , dataAction, children, classList }: iBtnMainColorProps) {
    return (
        <ButtonStyle className={classList} onClick={() => action(dataAction)}>
            {children}
        </ButtonStyle>
    );
};