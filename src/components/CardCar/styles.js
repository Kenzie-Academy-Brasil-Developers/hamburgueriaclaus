import styled from "styled-components";

export const CardStyle = styled.li`
    display: flex;
    justify-content: space-between;
`;

export const ContainerImgStyle = styled.picture`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 80px;
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
`;

export const ContainerCardInfoStyle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
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

 