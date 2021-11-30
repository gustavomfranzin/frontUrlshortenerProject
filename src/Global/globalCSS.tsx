import { createGlobalStyle } from 'styled-components';
 
const GlobalCSS = createGlobalStyle`

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  
}

@media (max-width: 1080px) {
  html {
    font-size: 93.75%;
  }
}

@media (max-width: 720px) {
  html {
    font-size: 87.5%;
  }
}

`;

export default GlobalCSS;