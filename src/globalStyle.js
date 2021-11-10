import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
        --color-primary: #89213a;
        --color-primary-dark: #600000;
        --color-secondary: #f4be60;
        --color-tertiary: #FAFAFA;
    }

    * {
        margin:0;
        padding: 0;
        outline: none;
        box-sizing: border-box;
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
        background-color: var(--color-tertiary);
    }

    #root {
        display: flex;
        flex-direction: column;
    }

    a {
        text-decoration: none;
        color: var(--color-primary);
    }
`;

export default GlobalStyle;
