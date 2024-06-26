
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

import { server } from './mswServer';

beforeAll(() => {server.listen();});
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
