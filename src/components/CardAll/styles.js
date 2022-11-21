import styled from "styled-components";

export const CardStyle = styled.li`
    border: 2px solid var(--gray-20);
    width: 300px;
    height: 346px;
    border-radius: var(--radius-2);
    overflow: hidden;
`;

export const CardInfoStyle= styled.div`
    padding: 23px 20px;
    display: flex;
    flex-direction: column;
    gap: 18px;
    align-items: flex-start;
`;

export const ContainerImgStyle = styled.picture`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 150px;
    background-color: var(--gray-0);
`;

export const ImgStyle = styled.img`
    object-fit: cover;
    max-width: 90%;
    max-height: 90%;
`;

export const ProductNameStyle = styled.h3`
    font-weight: var(--font-weight-4);
    color: var(--gray-100);
    font-size: 18px;
`;

export const CategoryStyle = styled.legend`
    font-weight: var(--font-weight-1);
    color: var(--gray-50);
    font-size: 12px;
`;

export const PriceStyle = styled.h4`
    font-weight: var(--font-weight-3);
    color: var(--color-primary);
    font-size: 14px;
`;