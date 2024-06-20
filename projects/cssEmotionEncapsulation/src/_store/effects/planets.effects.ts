import { ofType } from 'redux-observable';
import {
  catchError, map, switchMap
} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Action } from 'redux-actions';
import { showErrorMessage } from '../_common/actions';
import { IGetPlanets } from '../types/planets.types';
import { getPlanetsPending, getPlanetsSuccess } from '../actions/planets.actions';
import { getPlanets } from '../services/planets.services';

/** Get planets */
export const getPlanetsEffect$ = (actions$: Observable<Action<number>>) =>
  actions$.pipe(
    ofType(getPlanetsPending.toString()),
    switchMap(({ payload }) =>
      getPlanets(payload).pipe(
        map((result: IGetPlanets) => getPlanetsSuccess(result)),
        catchError(showErrorMessage)
      ))
  );
