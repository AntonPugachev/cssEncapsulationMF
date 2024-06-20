import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import Axios from 'axios-observable';
import { AxiosResponse } from 'axios';
import { IGetPlanets } from '../types/planets.types';

/** Get planets */
export const getPlanets = (payload: number): Observable<IGetPlanets> => {
  const url = `/api/planets?page=${payload}`;
  return Axios.get(url).pipe(map(({ data }: AxiosResponse<IGetPlanets>) => data));
};
