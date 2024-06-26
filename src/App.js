import './App.css';
import React from 'react';
import Weather from './weather.js'

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
