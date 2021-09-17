import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  var dotenv = require('dotenv')
  var dotenvExpand = require('dotenv-expand')

  var myEnv = dotenv.config()
  dotenvExpand(myEnv)

  const [placeholder, setPlaceholder] = useState('Hi');

  useEffect(() => {
    fetch('/hello').then(res => res.json()).then(data => {
      setPlaceholder(process.env.REACT_APP_API_URL);
      // setPlaceholder(data.result);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>Flask says {placeholder}</p>
      </header>
    </div>
  );
}

export default App;
