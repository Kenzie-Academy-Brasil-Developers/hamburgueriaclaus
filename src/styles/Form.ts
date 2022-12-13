import styled from "styled-components";

export const FormStyle = styled.form`
    border: 2px solid var(--gray-0);
    padding: 26px 24px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    border-radius: var(--radius-2);
    box-shadow: 0 0 30px 1px rgba(0,0,0,0.05);
    width: 278px;
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

    > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;

        > a {
            color: var(--gray-50);
            font-size: 14px;
            font-weight: var(--font-weight-2);
        }
    }
`;