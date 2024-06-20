import React from 'react';
import './App.scss';
import BabelCssComponent from './components/molecules/BabelCssComponent';
import CSSModulesComponent from './components/molecules/CSSModulesComponent';
import SCComponent from './components/molecules/SCComponent';
import EmotionComponent from './components/molecules/EmotionComponent';


const App = () => {

  return <>

    <BabelCssComponent/>
    <SCComponent/>
    <CSSModulesComponent/>
    <EmotionComponent/>

  </>;
};

export default App;
