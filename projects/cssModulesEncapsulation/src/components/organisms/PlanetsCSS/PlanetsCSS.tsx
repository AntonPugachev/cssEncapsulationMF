import React from 'react';

import styles from './Planets.scss';
import { IPlanet } from '../../../_store/types/planets.types';
import { PlanetsContext, useGetPlanets } from './useGetPlanets';
import PlanetsControlCSS from '../../molecules/PlanetsControlCSS';
import classnames from "classnames";

const PlanetsCSS = () => {

  const context = useGetPlanets();

  // -------------------------------------------------------------------------------------------------------------------

  const planetsJSX = context.planets.map((p: IPlanet) => {
    return (
      <div className={styles.planets__row} key={p.name} data-testid='planets__row'>
        <div className={styles.planets__col}>{p.name}</div>
        <div className={styles.planets__col}>{p.diameter}</div>
        <div className={styles.planets__col}>{p.climate}</div>
      </div>
    );
  });

  return (
    <PlanetsContext.Provider value={context}>
      <div>
        <div className={styles.planets__row}>
          <div className={classnames(styles.planets__col,styles.planets__colHeading)}>Name</div>
          <div className={classnames(styles.planets__col,styles.planets__colHeading)}>Diameter</div>
          <div className={classnames(styles.planets__col,styles.planets__colHeading)}>Climate</div>
        </div>
        {planetsJSX}
      </div>
      <PlanetsControlCSS/>
    </PlanetsContext.Provider>
  );
};

export default PlanetsCSS;
