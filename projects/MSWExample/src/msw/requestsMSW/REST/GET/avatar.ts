
import { rest } from 'msw';
// @ts-ignore
import avatarImage from '../../assets/avatar.png';

export const avatarHandler = () =>
  rest.get('*/api/REST/users/*/avatar*', async (_, res, ctx) => {
    const image = await fetch(avatarImage).then((res) => res.arrayBuffer());
    return res(
      ctx.set('Content-Length', image.byteLength.toString()),
      ctx.set('Content-Type', 'image/png'),
      ctx.body(image),
    );
  });
