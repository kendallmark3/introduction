import React, { Component } from 'react';
import markimage from './angular.png';
import './App.css';
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
          <ChildComponent text={"Components are the backbone of most software frameworks!"} />   

          <Money/>         
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <img src={markimage} alt="markimage" height="200px" width="200px"  />
          <br/>
          <a
            className="App-link"
            href="https://www.linkedin.com/in/mark-kendall-2742732"
            target="_blank"
            rel="noopener noreferrer"
          >
           linkedin.com
           <p>{this.state.info}</p>
          </a>
          <a
            className="App-link"
            href="https://kendallsoft-dd2b9.firebaseapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Angular
          </a>
      <br/>
          <Nav/>
          <Blog2></Blog2>
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
          <p>Click below for more info!</p>
          <ul className="header">
            <li><NavLink exact to="/">Intro:</NavLink> </li>
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
            Angular or React allow you to do so much with so little! Like this simple routing system in React
          </p>
          <p>
           In a matter of hours you can spin up Great sites! But can you Really?
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
          When I feel like blogging about something I will put it here but for now here is a little about me.
          </p>
         <p>Mark Kendall is a Software Engineer working in the Oil Industry in Dallas,Texas. He has been a programmer/developer 
            for many years specializing in .NET/C#/Angular/React/Nodejs development. Currently, he is a 
            Angular/C#/Full-Stack developer specializing in data science and visualizations. 
            He has published a book on Dotnetnuke, and written several articles on many .net subjects. 
            Apart from his passion for making money writing software to improve business, 
            Mark enjoys ranting-and-raving about current events and taking long runs on the beach.</p>
        </div>
      );
    }
  }

  class Blog2 extends Component {
    render() {
      return (
        <div>
          <h2>Let's talk Architecting Large-Scale Angular System</h2>
          <p>
          I want to talk here in detail about how to begin a large-scale Angular App.
          </p>
         <p>When building a large application that has lots of information coming 
           from and going to the database as well as data that is shared across 
           multiple components, things can easily get messy and complex. 
           Our app has a lot going on in it and one of the challenges is figuring 
           out how to manage data and maintain the UI state of the app.</p>
           <h2>Where to start with data management</h2>
           <p>Most teams, depending on the their experience with the Angular framework and others-
             either start off with state objects created at the parent component- pishing data as props
             to their child components as is the case with React, or use input and output decorators
             as is the case with Angular. These approaches work well for some applications and is probably 
             the recommended approach if in fact your application is small and unsophisticated-
             which allmost never are!
           </p>
        </div>
      );
    }
  }

  class NavBar extends Component {
    render() {
      return (
        <React.Fragment>
          <nav className="navbar navbar-dark bg-dark mb-3">
            <h1>Welcome to Kendall Systems.com</h1>
          </nav>
        </React.Fragment>
      );
    }
  }

  // const FirstChild = () => {
  //   return <p>Welcome to my  !</p>; 
  // };
  const SecondChild = () => {
    return <p>Hosted on AWS S3- with CI/CD and Buddy</p>; 
  };

  const ChildComponent = (props) => {  
    return <p>{props.text}</p>; 
  };

  class Money extends React.Component {
    render() {
      return <h2>Opportunity!</h2>;
    }
  }


export default App;

