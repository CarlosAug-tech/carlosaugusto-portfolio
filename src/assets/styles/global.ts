import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;

        &:focus {
            outline: 0;
        }
    }

    html, body, #root {
        width: 100vw;
        height: 100vh;
        min-height: 100vh;
        /* scroll-behavior: smooth; */
    } 

    body {
        overflow-x: hidden;
        -webkit-font-smoothing: antialiased;
        background: #f5f5f5;
    }

    body, input, textarea, button {
        font: 400 14px 'Roboto', sans-serif;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 700;
    }    
    
    button {
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }

     ul {
        list-style: none;
     }

`;
