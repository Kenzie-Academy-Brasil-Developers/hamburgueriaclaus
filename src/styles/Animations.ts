import { css } from 'styled-components'

export const Animations = css`
    @keyframes gotToLeft {
        0% {
            transform: translateX(+50px);
        }

        100% {
            
            transform: translateX(0);
        }
    } 

    @keyframes gotToRight {
        0% {
            transform: translateX(-50px);
        }

        100% {
            
            transform: translateX(0);
        }
    } 
`;

