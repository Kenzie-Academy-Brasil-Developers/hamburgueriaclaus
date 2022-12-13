import styled, { css } from "styled-components";
import { iStyledProps } from "./types";

export const InputStyle = styled.label<iStyledProps>`
    fieldset {
        border: 2px solid ${({currColor}) => {
            switch (currColor) {
                case 'error':
                    return css`var(--fb-negative)`;    

                case 'success':
                    return css`var(--fb-success)`;

                default:
                    return css`var(--gray-100)`;
            }
        }};
        padding: 10px 10px 15px 10px;
        border-radius: var(--radius-1);
        margin-bottom: 8px;
    }

    input {
        border: none;
        outline: none;
        color: var(--gray-100);
    }

    input, input::placeholder {
        font-family: var(--font-family-default);
        font-size: 16px;
    }

    input::placeholder {
        color: var(--gray-50);
    }

    legend {
        font-size: 12px;
        padding: 0 4px;
        color: #999999;
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
`;