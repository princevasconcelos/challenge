import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400');
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html,
  body,
  #root {
    height: 100%;
  }
  body {
    font-family: 'Roboto', sans-serif;
  }
`;

export default GlobalStyle;
