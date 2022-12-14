import React from 'react';
import { BtnStyle } from './styles';
import { iBtnLittleProps } from './types';


export function BtnLittle({ action , dataAction , children , classList }: iBtnLittleProps) {
    return (
        <BtnStyle className={classList} onClick={() => action(dataAction)}>
            {children}
        </BtnStyle>
    );
};