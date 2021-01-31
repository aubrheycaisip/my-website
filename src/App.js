import './App.css';
import React from "react";
import NavBar from "./components/NavBar/NavBar.js";
import About from './components/About/About.js';
import Contact from './components/Contact/Contact.js'
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import Project from './components/Project/Project.js'

class App extends React.Component{
  render(){
    return (
      <Router>
        <div className="mainDiv">
          <NavBar/>
          <Switch>
            <Route exact path="/" component={About}/>
            <Route exact path="/project" component={Project}/>
            <Route exact path="/contact" component={Contact}/>
          </Switch>
          <div style={{
            marginTop: "65px",
            backgroundColor: "white",
            padding: "5px"
          }}>
            <p style={{
              margin: "auto",
              fontSize: "20px"
            }}>My Portfolio</p>
            <p style={{
              margin: "auto",
              fontSize: "13px"
            }}>Aubrhey Caisip | © 2020</p>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
