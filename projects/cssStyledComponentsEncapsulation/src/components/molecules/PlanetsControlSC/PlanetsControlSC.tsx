import React, { useCallback, useContext } from 'react';
import SC from './PlanetsControl.styled';
import { IPlanetsContext, PlanetsContext } from '../../organisms/PlanetsSC/useGetPlanets';
import { ThemeUpdateContext } from '../../../MainSC';
import { DARK_THEME } from '../../../themes/dark';
import { useTheme } from 'styled-components';
import { LIGHT_THEME } from '../../../themes/light';
import { Theme } from '../../../themes/types';

const PlanetsControlSC = () => {
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

export default PlanetsControlSC;
