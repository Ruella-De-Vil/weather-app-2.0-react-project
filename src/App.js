import './App.css';
import React from 'react';
import Weather from "./Weather.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <p className="pt-4">search engine</p>
        </header>
        <main>
          <Weather />
        </main>
      </div>
    </div>
  );
}

export default App;
