import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    -webkit-font-smoothing: antialiased;
  }

  body {
    background-color: #F5F5F5;
    font-size: 14px;
    color: #333;
    font-family: 'Open Sans';
  }
`;