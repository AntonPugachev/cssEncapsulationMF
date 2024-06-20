import React, { useCallback, useContext } from 'react';
import './PlanetsControl.scss';
import { IPlanetsContext, PlanetsContext } from '../../organisms/Planets/useGetPlanets';

const PlanetsControl = () => {

  const { next, previous, setPage } = useContext<IPlanetsContext>(PlanetsContext);

  const onClick = useCallback((n: number) => () => {
    setPage((page: number) => page + n);
  }, [setPage]);

  return (
    <div className='planets__control'>
      <button className='planets__control-btn' disabled={!previous} onClick={onClick(-1)}>Previous</button>
      <button className='planets__control-btn' disabled={!next} onClick={onClick(1)}>Next</button>
    </div>
  );
};

export default PlanetsControl;
