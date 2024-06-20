import React from 'react';
import './App.scss';
import Planets from './components/organisms/Planets';
import { useServerless } from './serverless-hook/serverless-hook';

const App = () => {
  const { isServerlessInitializing } = useServerless({});
  return (
    isServerlessInitializing ? <Planets/> : <>loading</>
  );
};

export default App;
