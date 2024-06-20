import { Action } from 'redux-actions';
import { createTypedHandler, handleTypedActions } from 'redux-actions-ts';
import { IGetPlanets, IPlanet } from '../types/planets.types';
import { getPlanetsSuccess } from '../actions/planets.actions';

export interface IPlanetsState {
  planets: IPlanet[];
  next: string | null;
  previous: string | null;
  planetsLoaded: boolean;
}

export const initialState: IPlanetsState = {
  planets: [],
  next: null,
  previous: null,
  planetsLoaded: false
};

const planetsReducer = handleTypedActions(
  [
    /** Get planets */
    createTypedHandler(getPlanetsSuccess, (state: IPlanetsState, action: Action<IGetPlanets>): IPlanetsState => {

      return {
        ...state,
        planetsLoaded: false
      };
    }),
    /** Get planets */
    createTypedHandler(getPlanetsSuccess, (state: IPlanetsState, action: Action<IGetPlanets>): IPlanetsState => {

      return {
        ...state,
        planets: action.payload.results,
        previous: action.payload.previous,
        next: action.payload.next,
        planetsLoaded: true
      };
    }),
  ],
  initialState
);

export default planetsReducer;
