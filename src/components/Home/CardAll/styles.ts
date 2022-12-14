import styled from 'styled-components';

export const CardStyle = styled.li`
    border: 2px solid var(--gray-20);
    width: 250px;
    height: max-content;
    border-radius: var(--radius-2);
    overflow: hidden;
    flex-shrink: 0;
    transition: 0.8s;
    box-shadow: 0 0 10px var(--color-shadow);

    :hover {
        transform: scale(1.1);
        border-color: var(--color-primary);
    }

    @media(max-width: 900px) {
        width: 300px;
    }

    picture {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 150px;
        background-color: var(--gray-0);
    }

    img {
        object-fit: cover;
        max-width: 90%;
        max-height: 90%;
        filter: drop-shadow(0px 0px 10px rgba(0,0,0,0.3));
    }

    h3 {
        font-weight: var(--font-weight-4);
        color: var(--gray-100);
        font-size: 18px;
    }

    h4 {
        font-weight: var(--font-weight-3);
        color: var(--color-primary);
        font-size: 14px;
    }

    legend {
        font-weight: var(--font-weight-1);
        color: var(--gray-50);
        font-size: 12px;
    }

    > div {
        padding: 23px 20px;
        display: flex;
        flex-direction: column;
        gap: 18px;
        align-items: flex-start;
    }
`;
