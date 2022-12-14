import styled, { css } from 'styled-components';
import { iStyledProps } from './types';

export const InputStyle = styled.label<iStyledProps>`
    position: relative;
    fieldset {
        border: 2px solid var(--gray-0);
        padding: 10px 10px;
        border-radius: var(--radius-1);
        margin-bottom: 8px;
        background-color: var(--gray-0);
        border-color: #f5f5f5;
        transition: 0.5s;
    }

    input {
        border: none;
        outline: none;
        color: var(--gray-100);
        background-color: transparent;
    }

    input, label {
        font-family: var(--font-family-default);
        font-size: 16px;
    }

    label {
        position: absolute;
        color: var(--gray-50);
        transform: translate(0px, 3px);
        transition: 0.5s;
    }

    small {
        font-weight: var(--font-weight-2);
        color: var(--fb-negative);
        font-size: 12px;
    }

    div {
        display: flex;
        justify-content: space-between;
    }

    button {
        display: flex;
        align-items: center;
        border: none;
        background-color: transparent;
        font-size: 16px;
    }
    :focus-within {
    
        fieldset {
            background-color: var(--white-0);
            border-color: ${({currColor}) => {
            switch (currColor) {
                case 'error':
                    return css`var(--fb-negative)`;    

                case 'success':
                    return css`var(--fb-success)`;

                default:
                    return;
            }
            }};
        
        fieldset {
                ${({currColor}) => currColor === 'default' ? 'border-color: var(--gray-100)' : '/**/' };
            }
        }

        label {
            font-size: 12px;
            padding: 0 4px;
            color: #999999;
            transform: translate(-5px, -18px);
            background-color: var(--white-0);
        }
    }

    ${({currValue}) => {
        if (currValue.length > 0) {
            return css`
                fieldset {
                    background-color: var(--white-0);
                    border-color: 
                }

                label {
                    font-size: 12px;
                    padding: 0 4px;
                    color: #999999;
                    transform: translate(-5px, -18px);
                    background-color: var(--white-0);
                }
            `;
        }
    }};
    
    fieldset {
        ${({currColor}) => currColor === 'success' ? 'border-color: var(--fb-success)' : '/**/' };
    }
    ${({disabled}) => {
        if (disabled) {
            return css`
                fieldset {
                    border-color: var(--fb-load);
                }
            `;
        }
    }};
`;