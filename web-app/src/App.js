import React, { useState } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Display from './components/Display';

function App() {

// const [scoreValue, setScoreValue] = useState(0);


  return (
    <div className="App">
      <header className="App-header">
       <h1>Game</h1>
      </header>
    {/* <Display /> */}
    <Dashboard />
    </div>
  );
}

export default App;
