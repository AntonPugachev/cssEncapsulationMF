import React from 'react';
import DynamicComponent from '../../atoms/DynamicComponent';


const CSSModulesComponent = () => {

  return (
    <>
      <h3 className='component__text'>Example using CSS-modules in MF app</h3>
      <p className='component__text'> Each component used hash from CSS-modules</p>
      <div className='component__wrapper'>
        <DynamicComponent
          error={
            <div className='component__error'>
              <a href='https://github.com/AntonPugachev/cssModulesEncapsulationExample' target='_blank'>
                        The project
              </a> contained <b>CSS modules</b>  is not available.  You should start it locally.
            </div>
          }
          url='http://localhost:8003/remoteEntry.js'
          scope='test_app_css_modules'
          module='./mainCSS'/>
      </div>
    </>
  );
};

export default CSSModulesComponent;
