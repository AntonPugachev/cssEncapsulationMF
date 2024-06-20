import React from 'react';
import DynamicComponent from '../../atoms/DynamicComponent';


const BabelCssComponent: React.FC = () => {
  return (
    <>
      <h3 className='component__text'>Example using babel plugin in MF app</h3>
      <p className='component__text'> Each component has own data attribute</p>
      <div className='component__wrapper'>
        <DynamicComponent
          error={
            <div className='component__error'>
              <a href='https://github.com/AntonPugachev/cssBabelEncapsulationExample' target='_blank'>
                The project
              </a> contained <b>Babel plugin</b>  is not available. You should start it locally.
            </div>
          }
          url='http://localhost:8001/remoteEntry.js'
          scope='test_app_babel'
          module='./mainBabel'/>
      </div>
    </>
  );
};

export default BabelCssComponent;
