import React from 'react';
import DynamicComponent from '../../atoms/DynamicComponent';


const EmotionComponent = () => {

  return (
    <>
      <h3 className='component__text'>Example using Emotion in MF app</h3>
      <p className='component__text'> Each component used Emotion styles and themes</p>
      <div className='component__wrapper'>
        <DynamicComponent
          error={
            <div className='component__error'>
              <a href='https://github.com/AntonPugachev/cssEmotionEncapsulationExample' target='_blank'>
                        The project
              </a> contained <b>Styled Components</b>  is not available. You should start it locally.
            </div>
          }
          url='http://localhost:8006/remoteEntry.js?emotion=true'
          scope='test_app_emotion'
          module='./main'/>
      </div>
    </>
  );
};

export default EmotionComponent;
