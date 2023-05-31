import {createGlobalStyle} from 'styled-components';
import img from '../assets/images/background.jpg';

const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: Helvetica Now Display;
  src: url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');
}

html {
  background: url("${img}") no-repeat center center;
  background-size: cover;
}

body {
  margin: 0;
  font-family: 'Helvetica Now Display';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

`;

export default GlobalStyle;