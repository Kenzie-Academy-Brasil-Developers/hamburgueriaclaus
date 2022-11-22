import styled from "styled-components";

export const MainStyles = styled.main`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 80px;
    @media(max-width: 900px) {
        flex-direction: column;
    }
`;