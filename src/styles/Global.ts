import { createGlobalStyle } from 'styled-components';
import { Animations } from './Animations';
import { Buttons } from './Buttons';
import { Inputs } from './Inputs';
import { Reset } from './Reset';
import { Typograph } from './Typograph';

export const GlobalStyle = createGlobalStyle`
    ${() => Reset};
    :root {

        --color-primary: #27AE60;
        --color-primary-50: #93D7AF;
        --color-secondary: #EB5757;
        --white-0: #FFFFFF;
        --gray-0: #F5F5F5;
        --gray-20: #E0E0E0;
        --gray-30: #BDBDBD;
        --gray-50: #828282;
        --gray-100: #333333;
        --fb-negative: #E60000;
        --fb-warn: #FFCD07;
        --fb-success: #168821;
        --fb-info: #155BCB;
        --fb-load: #54c7ec;
        --color-shadow: #00000033; 

        --radius-1: 8px;
        --radius-2: 5px;

        --font-weight-1: 400;
        --font-weight-2: 500;
        --font-weight-3: 600;
        --font-weight-4: 700;
        --font-weight-5: 800;
        --font-weight-6: 900;

        --font-family-default: 'Inter', sans-serif;
    }

    ::-webkit-scrollbar {
        width: 10px;
    } 

    ::-webkit-scrollbar-thumb:hover { 
        background-color: var(--color-primary-50);    
    }

    ::-webkit-scrollbar-thumb:not(:hover) {   
        background-color: var(--color-primary);   
    }

    ::-webkit-scrollbar-thumb:window-inactive {
        background-color: var(--gray-50);
    }

    .container {
        margin: 0 auto;
        max-width: 1300px;
        padding: 0 114px;
    }

    body {
        margin-bottom: 50px;
    }

    @media(max-width: 900px) {
        .container {
            margin: 0 16px;
            padding: 0;
        }
    }
    ${() => Animations};
    ${() => Buttons};
    ${() => Inputs};
    ${() => Typograph};
   
`;