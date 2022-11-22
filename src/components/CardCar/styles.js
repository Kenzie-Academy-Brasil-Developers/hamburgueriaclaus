import styled from 'styled-components';

export const CardStyle = styled.li`
    display: flex;
    justify-content: space-between;
    transition: 0.8s;
    background-color: transparent;
    border-radius: var(--radius-2);
    border: 2px solid transparent;
    box-sizing: border-box;
    padding: 10px;
    :hover {
        border-color:  var(--color-primary);
        background-color: var(--white-0);
        
    }
`;

export const ContainerImgStyle = styled.picture`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 80px;
    min-width: 80px;
    min-height: 80px;
    background-color: var(--gray-20);
    border-radius: var(--radius-2);
    margin-right: 10px;
`;

export const CardDescriptionStyle = styled.div`
    display: flex;
`;

export const ImgStyle = styled.img`
    object-fit: cover;
    max-width: 90%;
    max-height: 90%;
    filter: drop-shadow(0px 0px 10px rgba(0,0,0,0.3));
`;

export const ContainerCardInfoStyle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;

    small {
        font-size: 13px;
    }
`;

export const ProductNameStyle = styled.h4`
    font-weight: var(--font-weight-4);
    color: var(--gray-100);
    font-size: 14px;
    margin-top: 10px;
`;

export const CategoryStyle = styled.legend`
    font-weight: var(--font-weight-1);
    color: var(--gray-50);
    font-size: 12px;
`;

 