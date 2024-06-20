import React from 'react';

import { IPlanet } from '../../../_store/types/planets.types';
import { PlanetsContext, useGetPlanets } from './useGetPlanets';
import PlanetsControlEmotion from '../../molecules/PlanetsControlEmotion';
import SC from './Planets.styled';

const PlanetsEmotion = () => {

  const context = useGetPlanets();

  // -------------------------------------------------------------------------------------------------------------------

  const planetsJSX = context.planets.map((p: IPlanet) => {
    return (
      <SC.PlanetsRow key={p.name} data-testid='planets__row'>
        <SC.PlanetsCol jc={'center'} >{p.name}</SC.PlanetsCol>
        <SC.PlanetsCol jc={'center'} >{p.diameter}</SC.PlanetsCol>
        <SC.PlanetsCol jc={'center'} >{p.climate}</SC.PlanetsCol>
      </SC.PlanetsRow>
    );
  });

  return (
    <PlanetsContext.Provider value={context}>
      <div >
        <SC.PlanetsRow>
          <SC.PlanetsColHeading jc={'center'}>Name</SC.PlanetsColHeading>
          <SC.PlanetsColHeading jc={'center'}>Diameter</SC.PlanetsColHeading>
          <SC.PlanetsColHeading jc={'center'}>Climate</SC.PlanetsColHeading>
        </SC.PlanetsRow>
        {planetsJSX}
      </div>
      <PlanetsControlEmotion/>
    </PlanetsContext.Provider>
  );
};

export default PlanetsEmotion;
