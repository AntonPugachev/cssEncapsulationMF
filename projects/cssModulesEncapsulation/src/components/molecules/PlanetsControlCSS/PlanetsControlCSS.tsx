import React, { useCallback, useContext } from 'react';
import styles from './PlanetsControl.scss';
import { IPlanetsContext, PlanetsContext } from '../../organisms/PlanetsCSS/useGetPlanets';

const PlanetsControlCSS = () => {

  const { next, previous, setPage } = useContext<IPlanetsContext>(PlanetsContext);

  const onClick = useCallback((n: number) => {
    return () => {
      setPage((page: number) => page += n);
    };
  }, [setPage]);

  return (
    <div className={styles.planets__control}>
      <button className={styles.planets__controlBtn} disabled={!previous} onClick={onClick(-1)}>Previous</button>
      <button className={styles.planets__controlBtn}  disabled={!next} onClick={onClick(1)}>Next</button>
    </div>
  );
};

export default PlanetsControlCSS;
