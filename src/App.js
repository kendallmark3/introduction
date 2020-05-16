import React, { Component } from 'react';
import logo from './logo.svg';
import markimage from './MarkKendall.jpg';
import './App.css';
import Plot from 'react-plotly.js';

class ParentComponent extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <NavBar saying="Smarts, Grit and Drive"/>
          <FirstChild />
          <SecondChild />
          <ChildComponent text={"It's all about components folks! Learn to build them make money."} />
          <Myplot/>
          <Money/>
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
            Learn React for the Best Jobs on the planet! <br></br>Mr. Mark Kendall of KCF Technologies.
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

  class NavBar extends Component {
    render() {
      return (
        <React.Fragment>
          <nav className="navbar navbar-dark bg-dark mb-3">
            <a className="navbar-brand" href="https://www.kcftechnologies.com">
              <p>My Current Employer KCF Technolgies<span className="badge badge-secondary">{this.props.saying}</span></p>
            </a>
          </nav>
        </React.Fragment>
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

  class Money extends React.Component {
    render() {
      return <h2>MONEY!</h2>;
    }
  }

  class Myplot extends React.Component {
    render() {
      return (
        <Plot
          data={[
            {
              x: [1, 2, 3],
              y: [2, 6, 3],
              type: 'scatter',
              mode: 'lines+markers',
              marker: {color: 'red'},
            },
            {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
          ]}
          layout={ {width: 320, height: 240, title: 'Plotly is Killer Library'} }
        />
      );
    }
  }


export default ParentComponent;

