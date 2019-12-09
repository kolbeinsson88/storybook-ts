import { createGlobalStyle, css } from 'styled-components';

const Body = css`
    body {
        font-family: 'Yanone Kaffeesatz', sans-serif;
        font-size: 16px;
        font-weight: 500;
    }
`;

const Header = css`

`;

/*
    font-family: 'Abel', sans-serif;
    font-family: 'Yanone Kaffeesatz', sans-serif;
    font-family: 'Teko', sans-serif;
    font-family: 'BenchNine', sans-serif;
    font-family: 'Lato', sans-serif;
    font-family: 'Josefin Slab', serif;
*/
export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Josefin+Sans:300,400|Literata:600&display=swap&subset=latin-ext');
    @import url('https://fonts.googleapis.com/css?family=Abel|BenchNine|Josefin+Slab:400i|Lato:400i|Teko:300|Yanone+Kaffeesatz&display=swap');

    ${Body};
    ${Header};
`;

export default GlobalStyles;