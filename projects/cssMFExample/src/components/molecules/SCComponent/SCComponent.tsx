import React from 'react';
import DynamicComponent from '../../atoms/DynamicComponent';


const SCComponent = () => {

  return (
    <>
      <h3 className='component__text'>Example using SC in MF app</h3>
      <p className='component__text'> Each component used styled-components</p>
      <div className='component__wrapper'>
        <DynamicComponent
          error={
            <div className='component__error'>
              <a href='https://github.com/AntonPugachev/cssStyledComponentsEncapsulationExample' target='_blank'>
                        The project
              </a> contained <b>Styled Components</b>  is not available. You should start it locally.
            </div>
          }
          url='http://localhost:8002/remoteEntry.js'
          scope='test_app_sc'
          module='./main'/>
      </div>
    </>
  );
};

export default SCComponent;
