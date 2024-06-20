
import {
  mockDelete, mockPost, mockPut
} from './requestsMSW/helper';
import { globalHandlersREST } from './requestsMSW/REST';

export const globalHandlers = [
  ...globalHandlersREST,
  mockPost(),
  mockPut(),
  mockDelete(),
];
