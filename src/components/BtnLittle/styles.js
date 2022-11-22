import styled from "styled-components";

export const BtnStyle = styled.button`
    color: var(--gray-30);
    margin-top: 5px;
    transition: 0.5s;
    border-bottom: 2px solid transparent;

    :hover {
        color: var(--gray-100);
        border-bottom-color: var(--gray-100);
    }
`;