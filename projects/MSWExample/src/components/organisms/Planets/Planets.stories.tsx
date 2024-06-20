import { Meta, Story } from '@storybook/react';
import React from 'react';
import Planets from './index';
import { globalHandlers } from '../../../msw/handlers';
import { store } from '../../../_store';
import { Provider } from 'react-redux';


const component = {
  title: 'Planets',
  component: Planets,
} as Meta;

export const Demo: Story = () => (
  <Provider store={store}>
    <Planets/>
  </Provider>
);

Demo.parameters = {
  msw:
      { handlers: globalHandlers }
};


export default component;
