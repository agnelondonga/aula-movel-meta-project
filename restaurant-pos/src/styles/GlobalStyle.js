import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Roboto', sans-serif;
    background-color: #F8F9FA;
    color: #1A3C34;
    line-height: 1.5;
  }
  h1, h2, h3 {
    font-family: 'Poppins', sans-serif;
    color: #1A3C34;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  button {
    cursor: pointer;
    transition: all 0.3s ease;
    font-family: 'Roboto', sans-serif;
  }
  .card {
    background: #FFFFFF;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    padding: 24px;
    transition: transform 0.2s;
    &:hover {
      transform: translateY(-4px);
    }
  }
`;

export default GlobalStyle;