import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body, *, html {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
        outline: none;
    }

    body {
        background: ${(props) => (props.themeWhite ? "#f9f9f9" : "#333")}
    }
`;
