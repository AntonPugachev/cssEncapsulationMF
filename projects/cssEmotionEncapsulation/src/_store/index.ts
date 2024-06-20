import { combineEpics, createEpicMiddleware } from 'redux-observable';
import {
  applyMiddleware, combineReducers, createStore
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { getPlanetsEffect$ } from './effects/planets.effects';
import planetsReducer, { IPlanetsState } from './reducers/planets.reducer';

/* [imports:end] */

export interface IStore {
  planets: IPlanetsState;

  /* [types:end] */
}

const observableMiddleware = createEpicMiddleware();

/** Register reducers */
const reducers = combineReducers({
  planets: planetsReducer,

  /* [reducers:end] */
});

/** Create store */
export const store = createStore(reducers, composeWithDevTools(applyMiddleware(observableMiddleware)));

/** Register effects */
observableMiddleware.run(combineEpics<any, any, any, any>(getPlanetsEffect$,
  /* [effects:end] */
// eslint-disable-next-line function-paren-newline
));
