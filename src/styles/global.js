import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {

        --color-primary: #27AE60;
        --color-primary-50: #93D7AF;
        --color-secondary: #EB5757;
        --white-0: #FFFFFF;
        --gray-0: #F5F5F5;
        --gray-20: #E0E0E0;
        --gray-50: #828282;
        --gray-100: #333333;
        --fb-negative: #E60000;
        --fb-warn: #FFCD07;
        --fb-success: #168821;
        --fb-info: #155BCB;

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

    .container {
        margin: 0 auto;
        max-width: 1200px;
    }
`;

export default GlobalStyle;