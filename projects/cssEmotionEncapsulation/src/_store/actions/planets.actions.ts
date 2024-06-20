import { createTypedAction } from 'redux-actions-ts';
import { IGetPlanets } from '../types/planets.types';

export const getPlanetsPending = createTypedAction<number>('[Pending] Get planets');
export const getPlanetsSuccess = createTypedAction<IGetPlanets>('[Success] Get planets');
