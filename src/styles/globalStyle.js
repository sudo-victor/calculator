import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body, *, html {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
        outline: none;
        font-family: "Roboto", sans-serif;
    }

    body {
        background: #191622;
    }
`;

export default GlobalStyle;
