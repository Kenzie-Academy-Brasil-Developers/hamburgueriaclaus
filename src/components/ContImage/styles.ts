import styled from 'styled-components';

export const ContImageStyle = styled.section`
    img {
        display: block;
        object-fit: contain;
        max-width: 363px;
    }
    order: 0;

    .desktopImg {
        transform: translateX(30px);
    }

    @media(max-width: 900px) {
        order: -1;
        .desktopImg {
            display: none;
        }    
    }
`;