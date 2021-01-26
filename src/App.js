import './App.css';
import React from "react";
import NavNar from "./components/NavBar.js";
import About from './components/About/About.js';

class App extends React.Component{
  render(){
    return (
      <div className="mainDiv">
        <NavNar/>
        <About/>
        <div style={{
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
    );
  }
}

export default App;
