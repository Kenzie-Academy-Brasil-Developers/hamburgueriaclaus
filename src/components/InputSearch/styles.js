import styled from "styled-components";

export const ContainerInputStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: var(--radius-1);
    border: 2px solid var(--gray-20);
    width: 300px;
    padding: 10px 15px;
    transition: 0.6s;
    background-color: var(--white-0);
    
    :focus-within {
        border-color: var(--gray-100);
    }

    @media (max-width: 900px) {
        width: 100%;
        margin-top: 14px;
        width: 300px;
    }
`;

export const InputStyle = styled.input`
    background-color: transparent;
    outline: none;
    border: none;
    width: 160px;
    height: max-content;
`;