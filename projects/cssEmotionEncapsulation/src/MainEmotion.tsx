import { Provider } from 'react-redux';
import { store } from './_store';
import intercept from './api/interceptor';
import React, {
  createContext, useCallback, useState
} from 'react';

import { Theme } from './themes/types';
import { LIGHT_THEME } from './themes/light';
import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';
import PlanetsEmotion from './components/organisms/PlanetsEmotion';
import GlobalStyles from './App.styled';

intercept();
export const ThemeUpdateContext = createContext((changes: Theme) =>
  console.error('attempted to set theme outside of a ThemeUpdateContext.Provider'));

const MainEmotion = () => {
  const [myTheme, setMyTheme] = useState(LIGHT_THEME);
  const updateTheme = useCallback(
    (changes: Theme) => setMyTheme(changes),
    [myTheme, setMyTheme]
  );
  return <div id='emotion-root'>
    <ThemeProvider theme={ myTheme as Theme }>
      <ThemeUpdateContext.Provider value={updateTheme}>
        <Provider store={store}>
          <GlobalStyles/>
          <TextDivStyled>Emotion Example</TextDivStyled>

          <PlanetsEmotion/>
        </Provider>
      </ThemeUpdateContext.Provider>
    </ThemeProvider>
  </div>;

};
export default MainEmotion;

const TextDivStyled = styled.div(({ theme: { color } }) => `
  color: ${color.basic.heading};
`);
