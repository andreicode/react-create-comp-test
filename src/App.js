import React from 'react';
import './App.css';
import SuperTest from './test/super-test';
import GreenSquare from './components/green-square';
import YellowSquare from './components/yellow-square';
import ExampleOne from './components/example-one';

function App() {
  return (
    <div className="App">
      <SuperTest/>
      <GreenSquare />
      <YellowSquare />
      <ExampleOne/>
    </div>
  );
}

export default App;
