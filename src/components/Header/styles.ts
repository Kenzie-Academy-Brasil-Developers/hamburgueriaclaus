import styled from 'styled-components';

export const HeaderStyle = styled.header`
    background-color: var(--gray-0);
    padding: 10px 0;
    margin-bottom: 25px;
    box-shadow: 0 0 10px var(--color-shadow);
`;

export const ContainerHeadStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 1300px;
    padding: 0 114px;

    @media(max-width: 900px) {
        flex-direction: column;
        align-items: center;
        width: 85%;
        margin: 15px auto;
        padding: 0;
    }
`;
