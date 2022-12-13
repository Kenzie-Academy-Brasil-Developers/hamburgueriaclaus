import styled from "styled-components";

export const ContImageStyle = styled.section`
    img {
        display: block;
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