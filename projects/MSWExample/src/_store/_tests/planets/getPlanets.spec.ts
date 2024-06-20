import { getPlanetsPending, getPlanetsSuccess } from '../../actions/planets.actions';
import { getPlanetsEffect$ } from '../../effects/planets.effects';
import {
  lastValueFrom, of, throwError
} from 'rxjs';
import { errorAction } from '../../_common/actions';
import * as service from '../../services/planets.services';
import { Action } from 'redux-actions';
import planetsReducer, { initialState } from '../../reducers/planets.reducer';
import { IGetPlanets } from '../../types/planets.types';

describe('Tests for getPlanets', () => {

  const action$ = of({
    type: getPlanetsPending.toString(),
    payload: 1
  });

  const payload: IGetPlanets = {
    next: '',
    previous: '',
    results: [],
    count: 0
  };

  it('should dispatch getPlanetsSuccess action', async () => {
    jest.spyOn(service, 'getPlanets').mockReturnValue(of(payload));

    const effect$ = getPlanetsEffect$(action$);
    const action: Action<any> = await lastValueFrom(effect$);

    expect(action.type).toBe(getPlanetsSuccess.toString());
    expect(action.payload).toBe(payload);
  });

  it('should dispatch error action', async () => {
    jest.spyOn(service, 'getPlanets').mockReturnValue(throwError(() => new Error('test')));
    jest.spyOn(console, 'log').mockImplementation(jest.fn);

    const effect$ = getPlanetsEffect$(action$);
    const action: Action<any> = await lastValueFrom(effect$);

    expect(action.type).toBe(errorAction.toString());
  });

  it('should return the initial state', () => {
    const action: Action<any> = {
      type: 'Empty',
      payload: ''
    };
    expect(planetsReducer(undefined, action)).toEqual(initialState);
  });

  it('should handle getPlanetsSuccess action', () => {
    const action: Action<any> = {
      type: getPlanetsSuccess.toString(),
      payload
    };
    const nextState = planetsReducer(initialState, action);
    expect(nextState).toEqual({
      ...initialState,
      planets: payload.results,
      next: payload.next,
      previous: payload.previous,
      planetsLoaded: true
    });
  });

});
