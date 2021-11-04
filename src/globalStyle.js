import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
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

    body {
        font-family: sans-serif;
    }

    #root {
        display: flex;
        flex-direction: column;
    }
`;

export default GlobalStyle;
