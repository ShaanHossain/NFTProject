import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import BackstoryPage from "./BackstoryPage/backstorypage";
import BackgroundVideo from "./HomePage/background_video";
import SandGradientPages from "./SandGradientPages";

function App() {

  var dotenv = require('dotenv')
  var dotenvExpand = require('dotenv-expand')

  var myEnv = dotenv.config()
  dotenvExpand(myEnv)

  // const [placeholder, setPlaceholder] = useState('Hi');
  //
  // useEffect(() => {
  //   fetch('/hello').then(res => res.json()).then(data => {
  //     // setPlaceholder(process.env.REACT_APP_API_URL);
  //     setPlaceholder(data.result);
  //   });
  // }, []);

    //
    // const requestOptions = {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ title: 'Fetch Mint Example' })
    // };
  // const mint = async () => {
  //     const data = await fetch('api/nft', requestOptions);
  //     alert(data);
  // }

  return (
    <div className="App">
      {/*<HomePage />*/}
      <BackgroundVideo />
      <BackstoryPage />
        <SandGradientPages />
      {/*<RoadmapPage />*/}
      {/*  <FAQPage />*/}
      {/*  <TeamPage />*/}
    </div>
  );
}

export default App;
