import React, { Component } from 'react';
import logo from './logo.svg';
import markimage from './MarkKendall.jpg';
import './App.css';

class ParentComponent extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <FirstChild />
          <SecondChild />
          <ChildComponent text={"It's all about components folks! Learn to build them make money."} />
          <img src={logo} className="App-logo" alt="logo" />
          <img src={markimage} className="markimage" alt="markimage" />
          <a
            className="App-link"
            href="https://www.reverbnation.com/TheNuKendalls"
            target="_blank"
            rel="noopener noreferrer"
          >
           Mark Kendall Band
          </a>
          
          {/* <p>
            Edit <code>src/App.js</code> and save to reload.
          </p> */}
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React for the Best Job on the planet! Mr Mark Kendall of KCF Technologies.
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
  }

  const FirstChild = () => {
    return <p>Welcome to my React Development Site!</p>; 
  };
  const SecondChild = () => {
    return <p>Hosted on AWS S3- with CI/CD with Buddy</p>; 
  };

  const ChildComponent = (props) => {  
    return <p>{props.text}</p>; 
  };


export default ParentComponent;

