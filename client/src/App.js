import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import HomePage from "./HomePage/homepage";
import BackstoryPage from "./BackstoryPage/backstorypage";
import RoadmapPage from "./RoadMapPage/roadmappage";
import FAQPage from "./FAQPage/faqpage";
import TeamPage from "./TeamPage/teampage";
import Footer from "./footer";
import JoinDiscordBanner from "./join_discord_banner";
import DolphinFrameGif from "../src/dolphin-frame-gif"
import BoxPage from "../src/BoxPage/boxpage"

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


    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: 'Fetch Mint Example' })
    };
  const mint = async () => {
      const data = await fetch('api/nft', requestOptions);
      alert(data);
  }

  return (
    <div className="App">
      <HomePage />
        <hr />
      <BackstoryPage />
      {/*  <hr />*/}
      {/*  <div>*/}
      {/*      Button to mint:*/}
      {/*      <button type="button" onClick={mint}>Mint</button>*/}
      {/*  </div>*/}
        <hr />
      <RoadmapPage />
        <hr />
        {/*<hr />*/}
        <BoxPage />
      {/*<FAQPage />*/}
        {/*<hr />*/}
      <TeamPage />
        <hr />
      {/*  <JoinDiscordBanner/>*/}
      {/*  <DolphinFrameGif />*/}
        <Footer/>

    </div>
  );
}

export default App;
