import styled from 'styled-components';

export const AsideStyle = styled.aside`
    animation: gotToLeft 1s ease forwards;
    position: sticky;
    top: 15px;
    width: 60%;
    min-width: 300px;
    max-width: 400px;
    box-shadow: 0 0 10px var(--color-shadow);
    overflow: hidden;
    border-radius: var(--radius-2);
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
    gap: 10px;
    padding: 20px 10px;
    max-height: 280px;
    overflow-y: scroll;
    border-bottom: 2px solid var(--gray-20);
    ::-webkit-scrollbar {
        width: 10px;
    } 

    ::-webkit-scrollbar-thumb:hover { 
        background-color: var(--color-primary-50);    
    }

    ::-webkit-scrollbar-thumb:not(:hover) {   
        background-color: var(--color-primary);   
    }

    ::-webkit-scrollbar-thumb:window-inactive {
        background-color: var(--gray-50);
    }
`;

export const CarEmptyStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
    height: 160px;

    h3 {
        font-weight: var(--font-weight-4);
        color: var(--gray-100);
        font-size: 18px;
    }

    legend {
        font-weight: var(--font-weight-1);
        color: var(--gray-50);
        font-size: 14px;
    }

`;