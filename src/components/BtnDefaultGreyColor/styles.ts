import styled from 'styled-components';

export const ButtonStyle = styled.button`
    background-color: var(--gray-20);
    color: var(--gray-50);
    

    :hover {
        background-color: var(--gray-50);
        color: var(--gray-20);
    }

    :disabled {
        pointer-events: none;
        background-color: var(--fb-load);
        color: var(--white-0);
    }

`;