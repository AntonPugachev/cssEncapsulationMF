import React, { useCallback, useContext } from 'react';
import './PlanetsControl.scss';
import { IPlanetsContext, PlanetsContext } from '../../organisms/PlanetsBabel/useGetPlanets';
interface IPlanetsControlBabel{
  className?:string;
}
const PlanetsControlBabel = ({ className }:IPlanetsControlBabel) => {

  const { next, previous, setPage } = useContext<IPlanetsContext>(PlanetsContext);

  const onClick = useCallback((n: number) => {
    return () => {
      setPage((page: number) => page += n);
    };
  }, [setPage]);

  // change global theme
  const onThemeClick = (() => {
    const currentTheme = document.body.getAttribute('data-theme');

    if (!currentTheme || currentTheme === 'light') {
      document.body.setAttribute('data-theme', 'dark');
    } else {
      document.body.setAttribute('data-theme', 'light');
    }
  });

  return (
    <div className='planets__control ' >
      <button className='planets__control-btn' disabled={!previous} onClick={onClick(-1)}>
        <div className={`${className ? className : ''}`}>
          Previous
        </div>
      </button>
      <button className='planets__control-btn' disabled={!next} onClick={onClick(1)}>Next</button>
      <button className='planets__control-btn' onClick={onThemeClick}>Change theme</button>
    </div>
  );
};

export default PlanetsControlBabel;
