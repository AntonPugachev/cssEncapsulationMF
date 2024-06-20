import React from 'react';
import './Planets.scss';
import './Planets.global.scss';
import { IPlanet } from '../../../_store/types/planets.types';
import { PlanetsContext, useGetPlanets } from './useGetPlanets';
import PlanetsControlBabel from '../../molecules/PlanetsControlBabel';

const PlanetsBabel = () => {

  const context = useGetPlanets();

  // -------------------------------------------------------------------------------------------------------------------

  const planetsJSX = context.planets.map((p: IPlanet) => {
    return (
      <div className='planets__row' key={p.name} data-testid='planets__row'>
        <div className='planets__col'>{p.name}</div>
        <div className='planets__col'>{p.diameter}</div>
        <div className='planets__col'>{p.climate}</div>
      </div>
    );
  });

  return (
    <PlanetsContext.Provider value={context}>
      <div className='planets'>
        <div className='planets__row'>
          <div className='planets__col planets__col--heading'>Name</div>
          <div className='planets__col planets__col--heading'>Diameter</div>
          <div className='planets__col planets__col--heading'>Climate</div>
        </div>
        {planetsJSX}
      </div>

      <PlanetsControlBabel className={'color'}/>

    </PlanetsContext.Provider>
  );
};

export default PlanetsBabel;
