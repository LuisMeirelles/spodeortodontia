import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
        --color-primary: #800000;
        --color-secondary: #003000;
        --color-secondary-dark: #002A00;
        --color-tertiary: #D6D6D6;
    }

    * {
        margin:0;
        padding: 0;
        outline: none;
        box-sizing: border-box;

        ::selection {
            color: var(--color-tertiary);
            background-color: #002A00;
        }
    }

    html,
    body,
    #root {
        width: 100%;
        min-height: 100vh;
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        font-family: sans-serif;
        color: var(--color-primary);
        background-color: --color-tertiary;
    }

    #root {
        display: flex;
        flex-direction: column;
    }
`;

export default GlobalStyle;
