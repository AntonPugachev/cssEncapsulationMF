import React from 'react';
import './Planets.scss';
import { IPlanet } from '../../../_store/types/planets.types';
import { PlanetsContext, useGetPlanets } from './useGetPlanets';
import PlanetsControl from '../../molecules/PlanetsControl';

const Planets = () => {

  const context = useGetPlanets();
  const { isLoading, planetsLoadedError } = context;

  if (planetsLoadedError) {
    return <>Error, try to reload</>;
  }

  return (
    <>
      {isLoading ? <>loading</> :
        <PlanetsContext.Provider value={context}>
          <div className='planets'>
            <div className='planets__row'>
              <div className='planets__col planets__col--heading'>Name</div>
              <div className='planets__col planets__col--heading'>Diameter</div>
              <div className='planets__col planets__col--heading'>Climate</div>
            </div>
            {context.planets.map((p: IPlanet) => (
              <div className='planets__row' key={p.name} data-testid='planets__row'>
                <div className='planets__col'>{p.name}</div>
                <div className='planets__col'>{p.diameter}</div>
                <div className='planets__col'>{p.climate}</div>
              </div>
            ))}
          </div>
          <PlanetsControl/>
        </PlanetsContext.Provider>}
    </>
  );
};

export default Planets;
