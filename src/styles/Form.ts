import styled from "styled-components";

export const FormStyle = styled.form`
    border: 2px solid var(--gray-0);
    padding: 26px 24px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    border-radius: var(--radius-2);
    box-shadow: 0 0 30px 1px rgba(0,0,0,0.05);
    max-width: 400px;
    h1 {
        color: var(--gray-100);
        font-weight: var(--font-weight-4);
        font-size: 18px;
    }

    > legend {
        color:  #999999;
        font-size: 14px;
        font-weight: var(--font-weight-1);
        text-align: center;
    }
`;