import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    min-height: 100vh;
    font-size: 100%;

    @media(max-width: 480px){
      font-size: 82.5%;
    }

    @media(max-width: 760px){
      font-size: 90%;
    }
  }


  body, input, button, textarea {
    font-family: 'Open Sans', sans-serif;
    color: ${({ theme }) => theme.colors.text};

    -webkit-font-smoothing: antialiased !important;
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};
  }

  button, a {
    cursor: pointer;
  }
`;
