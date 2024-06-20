import React, { useCallback, useContext } from 'react';
import SC from './PlanetsControl.styled';
import { IPlanetsContext, PlanetsContext } from '../../organisms/PlanetsEmotion/useGetPlanets';

import { DARK_THEME } from '../../../themes/dark';

import { LIGHT_THEME } from '../../../themes/light';
import { Theme } from '../../../themes/types';
import { useTheme } from '@emotion/react';
import { ThemeUpdateContext } from '../../../MainEmotion';

const PlanetsControlEmotion = () => {
  const { next, previous, setPage } = useContext<IPlanetsContext>(PlanetsContext);
  const updateTheme = useContext(ThemeUpdateContext);
  const currentTheme = useTheme() as Theme;

  const onClick = useCallback((n: number) => () => {
    setPage((page: number) => page += n);
  }, [setPage]);

  // change global theme
  const onThemeClick = useCallback(() => {
    updateTheme(currentTheme.name === 'light' ? DARK_THEME : LIGHT_THEME );
  }, [currentTheme]);

  return (
    <SC.PlanetsControl ai='center' jc='center'>
      <SC.PlanetsButton disabled={!previous} onClick={onClick(-1)}>Previous</SC.PlanetsButton>
      <SC.PlanetsButton disabled={!next} onClick={onClick(1)}>Next</SC.PlanetsButton>
      <SC.PlanetsButton onClick={onThemeClick}>Change theme</SC.PlanetsButton>
    </SC.PlanetsControl>
  );
};

export default PlanetsControlEmotion;
