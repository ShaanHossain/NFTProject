import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from "./HomePage/homepage";
import BackstoryPage from "./BackstoryPage/backstorypage";
import RoadmapPage from "./RoadMapPage/roadmappage";
import FAQPage from "./FAQPage/faqpage";
import TeamPage from "./TeamPage/teampage";

function App() {

  var dotenv = require('dotenv')
  var dotenvExpand = require('dotenv-expand')

  var myEnv = dotenv.config()
  dotenvExpand(myEnv)

  const [placeholder, setPlaceholder] = useState('Hi');

  useEffect(() => {
    fetch('/hello').then(res => res.json()).then(data => {
      // setPlaceholder(process.env.REACT_APP_API_URL);
      setPlaceholder(data.result);
    });
  }, []);

  return (
    <div className="App">
      <HomePage />
      <BackstoryPage />
      <RoadmapPage />
      <FAQPage />
      <TeamPage />
    </div>
  );
}

export default App;
