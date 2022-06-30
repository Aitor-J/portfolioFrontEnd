import './App.scss';

import React from 'react';
import OnePage from './components/OnePage';
import Loader from './components/Loader';


function App() {

  return (
    <div className="App">
      <Loader />
      <OnePage />
    </div>
  );
}

export default App;
