import styled from "styled-components";

export const CardStyle = styled.li`
    border: 2px solid var(--gray-20);
    width: 300px;
    height: 346px;
    border-radius: var(--radius-2);
    overflow: hidden;

    div {
        padding: 23px 20px;
        display: flex;
        flex-direction: column;
        gap: 18px;
        align-items: flex-start;
    }
    
    picture {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 300px;
        height: 150px;
        background-color: var(--gray-0);
    }

    picture > img {
        object-fit: cover;
        max-width: 90%;
        max-height: 90%;
    }
`;