import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: 'Merriweather', serif;
    background-color: #fff;
  }
  li {
    list-style: none;
  }
  a {
    text-decoration: none;
    display: inline-block;
  }
  h1 {
    font-family: 'Montserrat', sans-serif;
  }
  h2,h3,h4,h5,h6 {
    font-family: 'Montserrat', sans-serif;
  }
  input, button {
    font-family: 'Montserrat', sans-serif;
    border: none;
  }
`;
