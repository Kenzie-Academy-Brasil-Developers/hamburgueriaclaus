import styled from 'styled-components';

export const CarTotalStyle = styled.div`
    padding: 16px 10px;
    display: flex;
    flex-direction: column;
    gap: 22px;
    

`;



export const TotalPriceInfoStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: var(--font-weight-3);
    font-size: 14px;

    h3 {
        color: var(--gray-100);
    }

    h4 {
        color: var(--gray-50);
    }
`;