import { createTypedAction } from 'redux-actions-ts';
import { of } from 'rxjs';

export const errorAction = createTypedAction<void>('[Error]');

export const showErrorMessage = (e: Error) => {
  console.error(e.message);
  return of(errorAction());
};
