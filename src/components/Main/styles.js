import styled from "styled-components";

export const MainStyles = styled.main`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding-bottom: 70px;
    gap: 30px;
    @media(max-width: 900px) {
        flex-direction: column;
    }
`;