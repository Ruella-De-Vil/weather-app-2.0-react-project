import './App.css';
import React from 'react';
import Weather from './Weather.js'

function App() {
  return (
    <div className="App">
      <div className="container">
          <Weather defaultCity="Durban"/>
      </div>
    </div>
  );
}

export default App;
