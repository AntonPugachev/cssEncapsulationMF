
import {
  css, useTheme, Global
} from '@emotion/react';

const GlobalStyles = () => {
  const theme = useTheme();
  return (
    <Global styles = {
      css` 
        html, body {
          height: 100%;
        }

        body {
          margin: 0;
          font-family: sans-serif;
        }
        #emotion-root{
          background-color:${theme.color.basic.bg};
        }
    `
    }
    />
  );
};

export default GlobalStyles;
