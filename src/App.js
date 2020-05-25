import React, { Component } from 'react';
import markimage from './angular.png';
import './App.css';
import Plot from 'react-plotly.js';
import {
  Route,
  NavLink,
  BrowserRouter
} from "react-router-dom";

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      info: "Resume"
    };
  }
  componentDidMount() {
    this.setState({ info:"My Resume"})
    console.log(this.state.count);
  }

  render() {
    return (
     
      <div className="App">
        <header className="App-header">
       
        <NavBar saying="Smarts, Grit and Drive"/>

          <SecondChild />
          <ChildComponent text={"Components are the backbone of most software framework!"} />
         
          <Money/>
          
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <img src={markimage} alt="markimage" height="100px" width="100px"  />
          <br/>
          <Myplot/>
          
          <a
            className="App-link"
            href="https://www.linkedin.com/in/mark-kendall-2742732"
            target="_blank"
            rel="noopener noreferrer"
          >
           linkedin.com
           <p>{this.state.info}</p>
          </a>

          
          {/* <a
            className="App-link"
            href="https://www.reverbnation.com/TheNuKendalls"
            target="_blank"
            rel="noopener noreferrer"
          >
           Mark Kendall Band
          </a> */}
          
          {/* <p>
            Edit <code>src/App.js</code> and save to reload.
          </p> */}
          {/* <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React for the Best Jobs on the planet! <br></br>Mr. Mark Kendall of KCF Technologies.
          </a> */}
          <a
            className="App-link"
            href="https://kendallsoft-dd2b9.firebaseapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Angular
          </a>
          <Nav/>
          </header>
       
      </div>
    );
  }
  }

  class Nav extends Component {
    render() {
      return (
        <BrowserRouter>
        <div>
          <p>Drill Down for more info!</p>
          <ul className="header">
            <li><NavLink exact to="/">The Set up</NavLink> </li>
            <li><NavLink to="/blog">Blog</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <div className="content">
              <Route exact path="/" component={Home} />
              <Route path="/blog" component={Blog} />
              <Route path="/contact" component={Contact} />
          </div>
        </div>
        </BrowserRouter>
      );
    }
  }


  class Home extends Component {
    render() {
      return (
        <div>
          <h1>More Info to Ponder</h1>
          <p>
            Angular or React allow so much with so little! Like this simple routing system in React
          </p>
          <p>
           In a matter of hours you can spin up Great sites!
          </p>
        </div>
      );
    }
  }

  class Contact extends Component {
    render() {
      return (
        <div>
          <h2>Get In Touch</h2>
          <p>Phone: 817-965-0856</p>
          <p>Email: kendallmark3@gmail.com</p>
        </div>
      );
    }
  }

  class Blog extends Component {
    render() {
      return (
        <div>
          <h2>A Blog Post</h2>
          <p>
          When I feel like blogging about something I will put it here but here is a little about me.
          </p>
         <p>Mark Kendall is a Software Engineer working in the Oil Industry in Dallas,Texas. He has been a programmer/developer 
            for many years specializing in .NET/C#/Angular/React/Nodejs development. Currently, he is a 
            Python/C# developer specializing in data science and visualizations. 
            He has published a book on Dotnetnuke, and written several articles on many .net subjects. 
            Apart from his passion for making money writing software to improve business, 
            Mark enjoys ranting-and-raving about current events and taking long runs on the beach</p>
        </div>
      );
    }
  }

  class NavBar extends Component {
    render() {
      return (
        <React.Fragment>
          <nav className="navbar navbar-dark bg-dark mb-3">
            <p>Welcome to Kendall Systems.com</p>
          </nav>
        </React.Fragment>
      );
    }
  }

  // const FirstChild = () => {
  //   return <p>Welcome to my  !</p>; 
  // };
  const SecondChild = () => {
    return <p>Hosted on AWS S3- with CI/CD with Buddy</p>; 
  };

  const ChildComponent = (props) => {  
    return <p>{props.text}</p>; 
  };

  class Money extends React.Component {
    render() {
      return <h2>Opportunity!</h2>;
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
          layout={ {width: 320, height: 240, title: 'We use Plotly for data visualization'} }
        />
      );
    }
  }


export default App;

