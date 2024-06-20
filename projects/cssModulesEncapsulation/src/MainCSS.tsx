import React from 'react';

import { Provider } from 'react-redux';
import { store } from './_store';
import intercept from './api/interceptor';
import PlanetsCSS from "./components/organisms/PlanetsCSS";

intercept();
const MainCSS = () => {
  return <React.StrictMode>
    <Provider store={store}>
      <div>CSS modules example</div>
      <PlanetsCSS/>
    </Provider>
  </React.StrictMode>;
};
export default MainCSS;
