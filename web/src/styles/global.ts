import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html,
  body {
    font-size: 100%;

    @media(max-width: 760px) {
      font-size: 90%;
    }
  }

  html,
  body,
  #__next {
    height: 100%;
    min-height: 100vh;
  }

  body, input, button, textarea, pre {
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

  a {
    text-decoration: none;
  }

  button {
    border: none;
    background: none;
  }

  ul{
    list-style: none;
  }
`;
