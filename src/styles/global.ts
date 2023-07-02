import { createGlobalStyle } from "styled-components";

export const GlobalStyle: any = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        @media (max-width: 768px) {
        body, input, textarea, button {
            font-size: 0.8rem;
        }
    }
    }

    :focus {
        outline: 0;
    }

    body {
        background-color: var(--white);
        font-family: 'Urbanist', sans-serif;
        -webkit-font-smoothing: antialiased;
        background: rgb(43,24,103);
background: linear-gradient(24deg, rgba(43,24,103,1) 0%, rgba(14,5,42,1) 15%, rgba(25,14,61,1) 90%, rgba(55,0,109,1) 100%);
    }

    body, input, textarea, button {
        font-family: 'Urbanist', sans-serif;
        font-weight: 400;
        font-size: 1rem;
        border: none;
    }
`;
