import { rest } from 'msw';

export const mockPost = (customResult: any = {}) =>
  rest.post('*', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(customResult));
  });
export const mockPut = (customResult: any = {}) =>
  rest.put('*', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(customResult));
  });
export const mockGet = (customResult: any = {}) =>
  rest.get('*', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(customResult));
  });
export const mockDelete = (customResult: any = {}) =>
  rest.delete('*', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(customResult));
  });

export const mockRestGet = <T>(
  urlMask: string,
  mockData: T,
  status = 200,
) => rest.get(urlMask, (req, res, ctx) =>
    res(ctx.status(status), ctx.json(mockData)),);
