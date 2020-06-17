import React from 'react';
import './App.css';
import ClassComponent from './classComponent';
import FunctionalComponent from './functionalComponent';

function App() {
  return (
    <div className="App">
      <h1>CLASS</h1>
      <ClassComponent myProp="This is passed as a prop." />
      <h1>FUNCTIONAL</h1>
      <FunctionalComponent myProp="This is passed as a prop." />
    </div>
  );
}

export default App;
