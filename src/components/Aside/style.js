import styled from "styled-components";

export const AsideStyle = styled.aside`
    animation: gotToLeft 1s ease forwards;
    position: sticky;
    top: 15px;
    width: 60%;
    min-width: 250px;
    box-shadow: 0 0 10px var(--color-shadow);
    overflow: hidden;
    border-radius: var(--radius-2);
    background-color: red;
    @media (max-width: 900px) {
        width: 100%;
    }
`;

export const HeadAsideStyle = styled.div`
    background-color: var(--color-primary);
    padding: 22px 20px 13px 20px;
    color: var(--white-0);
    font-size: 18px;
    font-weight: var(--font-weight-4);
    width: 100%;
    border-radius: var(--radius-2) var(--radius-2) 0 0;
    box-sizing: border-box;
`;

export const CarStyle = styled.div`
    background-color: var(--gray-0);
    min-height: 160px;
    max-height: 465px;
    width: 100%;
    
    overflow: hidden;
`;

export const CarListStyle = styled.ul`

    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px 10px;
    max-height: 280px;
    overflow-y: scroll;
`;
