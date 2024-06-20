import { Action } from 'redux-actions';
import { createTypedHandler, handleTypedActions } from 'redux-actions-ts';
import { IGetPlanets, IPlanet } from '../types/planets.types';
import { getPlanetsPending, getPlanetsSuccess } from '../actions/planets.actions';
import { errorAction } from '../_common/actions';

export interface IPlanetsState {
  planets: IPlanet[];
  next: string | null;
  previous: string | null;
  isLoading: boolean;
  planetsLoadedError:boolean;
}

export const initialState: IPlanetsState = {
  planets: [],
  next: null,
  previous: null,
  isLoading: false,
  planetsLoadedError: false
};

const planetsReducer = handleTypedActions(
  [
    /** Get planets pending */
    createTypedHandler(errorAction, (state: IPlanetsState): IPlanetsState => {
      return {
        ...state,
        isLoading: false,
        planetsLoadedError: true
      };
    }),
    /** Get planets pending */
    createTypedHandler(getPlanetsPending, (state: IPlanetsState): IPlanetsState => {
      return {
        ...state,
        isLoading: true,
        planetsLoadedError: false
      };
    }),
    /** Get planets Success*/
    createTypedHandler(getPlanetsSuccess, (state: IPlanetsState, action: Action<IGetPlanets>): IPlanetsState => {

      return {
        ...state,
        planets: action.payload.results,
        previous: action.payload.previous,
        next: action.payload.next,
        isLoading: false,
        planetsLoadedError: false
      };
    }),
  ],
  initialState
);

export default planetsReducer;
