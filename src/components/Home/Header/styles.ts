import styled from 'styled-components';

export const HeaderStyle = styled.header`
    background-color: var(--gray-0);
    padding: 10px 0;
    margin-bottom: 25px;
    box-shadow: 0 0 10px var(--color-shadow);

    > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0 auto;
        max-width: 1300px;
        padding: 0 114px;

        @media(max-width: 900px) {
            flex-direction: column;
            align-items: center;
            width: 85%;
            margin: 15px auto;
            padding: 0;
        }
    }

    .headerRight {
        display: flex;
        gap: 20px;

        > button {
            background-color: transparent;
            border: none;
            > img {
                filter: drop-shadow(0 0 0 transparent) invert(50%);
                transition: 0.5s;
            }
            > img:hover {
                filter: drop-shadow(0 0 10px var(--color-shadow)) invert(0%);
            }
        }
    }
`;
