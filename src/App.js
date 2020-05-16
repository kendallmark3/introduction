import React from 'react';
import logo from './logo.svg';
import markimage from './MarkKendall.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={markimage} width="300px" height="400px" alt="markimage" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React for the Best Job on the planet! Mr Mark Kendall of KCF Technolgies.
        </a>
        <a
          className="App-link"
          href="https://kendallsoft-dd2b9.firebaseapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          My Angular Site
        </a>
        
      </header>
    </div>
  );
}

export default App;
