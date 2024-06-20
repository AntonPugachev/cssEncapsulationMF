import React from 'react';
import { act, render, screen, waitFor } from '@testing-library/react';
import Planets from './Planets';
import { Provider } from 'react-redux';
import { store } from '../../../_store';
import { userEvent } from '@storybook/testing-library';
import { server } from '../../../msw/mswServer';
import { getPlanetsErrorHandler } from '../../../msw/requestsMSW/REST/GET/getPlanets';


describe('Test Planets component', () => {
 beforeEach(()=>{
   render(
     <Provider store={store}>
       <Planets />
     </Provider>
   );
 })
  it('should render Planets component', async () => {
   expect((await screen.findAllByTestId('planets__row')).length).toEqual(10)
   expect(screen.getByText('Previous')).toBeDisabled()
   userEvent.click(screen.getByText('Next'))
    await waitFor(()=>{
      expect(screen.queryByText('Previous')).not.toBeDisabled()
    })
  });
})

describe('Test Planets Error visually and with console', () => {
  let error=""
  beforeAll(()=>{
    jest.spyOn(console,'error').mockImplementation((msg)=>{
      error=msg
    })
  })
  beforeEach(()=>{
    server.use(getPlanetsErrorHandler)
    render(
      <Provider store={store}>
        <Planets />
      </Provider>
    );
  })
  it('Should catch the 500 error', async () => {
    expect(error).toEqual('')
    //visual error test
    expect(await screen.findByText('loading')).toBeInTheDocument()
    expect(await screen.findByText('Error, try to reload')).toBeInTheDocument()
    //console error test
    await waitFor(()=>{
      expect(error).toEqual('Request failed with status code 500')
    })

  });
})
