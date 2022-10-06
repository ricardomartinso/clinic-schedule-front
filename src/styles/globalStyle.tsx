import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: 'Raleway', sans-serif;
    background-color: #688BAB;
  }
  li {
    list-style: none;
  }
  a {
    text-decoration: none;
    display: inline-block;
  }
  h1 {
    font-family: 'Saira Stencil One', cursive;
  }
  h2,h3,h4,h5,h6 {
    font-family: 'Raleway', sans-serif;
  }
  input, button {
    font-family: 'Raleway', sans-serif;
    border: none;
  }
`;
