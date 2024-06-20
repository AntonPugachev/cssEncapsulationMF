import { createGlobalStyle } from 'styled-components';
import { Theme } from './themes/types';

const GlobalAppStyle = createGlobalStyle`
  html, body {
    height: 100%;
  }

  body {
    margin: 0;
    font-family: sans-serif;
   
  }
  #sc-root{
    background-color:   ${( ({ theme }:{theme:Theme}) => theme.color.basic.bg)};
  }
`;

export default GlobalAppStyle;
