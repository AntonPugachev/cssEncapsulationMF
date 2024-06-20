import {
  shallowEqual, useDispatch, useSelector
} from 'react-redux';
import { IStore } from '../../../_store';
import {
  createContext,
  Dispatch, SetStateAction, useEffect, useState
} from 'react';
import { getPlanetsPending } from '../../../_store/actions/planets.actions';
import { IPlanet } from '../../../_store/types/planets.types';

export interface IPlanetsContext {
  planets: IPlanet[];
  next: string | null;
  previous: string | null;
  isLoading: boolean;
  planetsLoadedError: boolean;
  page: number;
  setPage: Dispatch<SetStateAction<number>>
}

export const PlanetsContext = createContext<IPlanetsContext>({
  planets: [],
  next: null,
  previous: null,
  isLoading: false,
  planetsLoadedError: false,
  page: 1,
  setPage: () => {}
});

export const useGetPlanets = (): IPlanetsContext => {
  const dispatch = useDispatch();

  const [page, setPage] = useState<number>(1);
  const planetsState = useSelector((store: IStore) => store.planets, shallowEqual);

  useEffect(() => {
    dispatch(getPlanetsPending(page));
  }, [dispatch, page]);

  return {
    ...planetsState,
    page,
    setPage
  };
};
