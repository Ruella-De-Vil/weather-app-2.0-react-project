import './App.css';
import React from 'react';
import Weather from './Weather.js';

function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
        <h1>React Weather App</h1>
        </header>
        <main>
          <Weather />
        </main>
      </div>
    </div>
  );
}

export default App;
