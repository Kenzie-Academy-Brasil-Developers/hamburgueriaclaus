import styled from 'styled-components';

export const RegistryStyle = styled.main`
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 90vh;
    gap: 60px;

    @media(max-width: 900px) {
        flex-direction: column;
        height: max-content;
        gap: 0;
    }
`;