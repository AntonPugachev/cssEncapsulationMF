import { Provider } from 'react-redux';
import { store } from './_store';
import intercept from './api/interceptor';
import React, {
  createContext, useCallback, useState
} from 'react';
import GlobalAppStyle from './App.styled';
import PlanetsSC from './components/organisms/PlanetsSC';
import styled, { ThemeProvider } from 'styled-components';
import { Theme } from './themes/types';
import { LIGHT_THEME } from './themes/light';

intercept();
export const ThemeUpdateContext = createContext((changes: Theme) =>
  console.error('attempted to set theme outside of a ThemeUpdateContext.Provider'));

const MainSC = () => {
  const [myTheme, setMyTheme] = useState(LIGHT_THEME);
  const updateTheme = useCallback(
    (changes: Theme) => setMyTheme(changes),
    [myTheme, setMyTheme]
  );
  return <div id='sc-root'>
    <ThemeProvider theme={ myTheme as Theme }>
      <ThemeUpdateContext.Provider value={updateTheme}>
        <Provider store={store}>
          <TextDivStyled>Styled-components Example</TextDivStyled>
          <GlobalAppStyle/>
          <PlanetsSC/>
        </Provider>
      </ThemeUpdateContext.Provider>
    </ThemeProvider>
  </div>;

};
export default MainSC;

const TextDivStyled = styled.div(({ theme: { color } }) => `
  color:${color.basic.heading};
`);
