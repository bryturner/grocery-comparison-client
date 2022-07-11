import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box; }

html {
  font-size: 62.5%; }

body {
  font-family: 'Roboto', sans-serif;
  font-size: 1.6rem;
  /* font-family: 'Comic Neue', cursive;
font-family: 'Delius Swash Caps', cursive;
font-family: 'IBM Plex Sans', sans-serif;
font-family: 'Mali', cursive;
font-family: 'Roboto', sans-serif; */
  }
`;

export default GlobalStyles;
