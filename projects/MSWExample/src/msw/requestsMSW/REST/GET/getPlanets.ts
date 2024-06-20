import { rest } from 'msw';
import { IGetPlanets } from '../../../../_store/types/planets.types';
import {
  planetsPage1Mock,
  planetsPage2Mock,
  planetsPage3Mock,
  planetsPage4Mock,
  planetsPage5Mock, planetsPage6Mock
} from '../../../requests/REST/GET/planets.mock';


export const getPlanetsHandler = (customResult?:IGetPlanets) =>
// find coincidence by expression
  rest.get('*/api/planets*', (req, res, ctx) => {
    // if is received custom result, it returns without checks
    if (customResult) {
      return res(ctx.status(200), ctx.json(customResult));
    }

    let result: IGetPlanets |undefined;
    // find attributes in the url of request
    const url = req.url.search;
    ~url.indexOf('?page=1') && (result = planetsPage1Mock);
    ~url.indexOf('?page=2') && (result = planetsPage2Mock);
    ~url.indexOf('?page=3') && (result = planetsPage3Mock);
    ~url.indexOf('?page=4') && (result = planetsPage4Mock);
    ~url.indexOf('?page=5') && (result = planetsPage5Mock);
    ~url.indexOf('?page=6') && (result = planetsPage6Mock);

    // if result is not found the error returns
    return result ?
      res(ctx.status(200), ctx.json(result)) :
      res(ctx.status(500), ctx.json({ error: 'no mock data' }));
  });
export const getPlanetsErrorHandler =
// find coincidence by expression
  rest.get('*/api/planets*', (req, res, ctx) =>
    res(ctx.status(500), ctx.json({ error: 'Load error' })));
