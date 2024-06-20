import React from 'react';

import './AppBabel.global.scss';
import './AppBabel.scss';
import { Provider } from 'react-redux';
import { store } from './_store';
import intercept from './api/interceptor';
import PlanetsBabel from './components/organisms/PlanetsBabel';

intercept();
const AppBabel = () => {
  return <React.StrictMode>
    <div id='babel-root'>
      <Provider store={store}>
        <div className='app__description'>Babel plugin example</div>
        <PlanetsBabel/>
      </Provider>
    </div>
  </React.StrictMode>;
};
export default AppBabel;
