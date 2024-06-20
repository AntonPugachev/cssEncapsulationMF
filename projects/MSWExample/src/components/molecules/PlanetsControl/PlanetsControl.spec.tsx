import React from 'react';
import { render } from '@testing-library/react';
import PlanetsControl from './PlanetsControl';

describe('Test PlanetsControl component', () => {

  it('should render PlanetsControl component', () => {
    const { container } = render(<PlanetsControl />);
  });

})

