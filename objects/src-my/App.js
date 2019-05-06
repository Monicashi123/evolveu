import React, { Component } from 'react';
import logo from './components/logo.svg';
import logo1 from './components/logo1.svg';
import logo2 from './components/logo2.svg';
import logo3 from './components/logo3.svg';
import logo4 from './components/logo4.png';
import logo5 from './components/logo5.svg';
import './App.css';
import MathComp from './components/mathComp';
import AccountApp from './components/AccountApp'
import math from "./components/math";
import NewProduct from './components/NewProduct'

// import AccountController from "./components/AccountController";
import AccountComp from './components/AccountComp';

class App extends Component {
  constructor(){    super();
    this.state={
      compToShow:"icond" 
    }

  }
  onIcon = (event, i) => {
  	console.log("i am running");
    this.setState ({
    compToShow: i,
    })
  }

  render() {  
  	console.log("state", this.state);
    let toShow;

    if (this.state.compToShow === "icon1") {
      toShow = 
        <div>
        <MathComp/>
        </div>
    }  


    if (this.state.compToShow === "icon2") {
      toShow = 
        <div>
        <AccountApp/>
        </div>
    }  



    if(
      this.state.compToShow === "icon3") {
      toShow = 
        <div>
         <AccountComp/>
        </div>
    }  


    if (this.state.compToShow === "icon4") {
      toShow = 
        <div>
        <NewProduct/>
        </div>
    }  

    if (this.state.compToShow === "icon5") {
      toShow = 
        <div>
         <MathComp/>
        </div>
    }  


     return (
      <div className="App">
        <header className="App-header">
            <div  className = "icons">
                  <div className = "icon1" onClick={(e,i) => this.onIcon(e,"icon1")}><img src={logo} className="App-logo" alt="icond" /> </div>
                  <div className= "icon2" onClick={(e,i) => this.onIcon(e,"icon2")}><img src={logo1} className="App-logo" alt="icond" /> </div>
                  <div className= "icon3" onClick={(e,i) => this.onIcon(e,"icon3")}><img src={logo2} className="App-logo" alt="icond" /> </div>
                  <div className= "icon4" onClick={(e,i) => this.onIcon(e,"icon4")}><img src={logo3} className="App-logo" alt="icond"/ > </div>
                  <div className= "icon5" onClick={(e,i) => this.onIcon(e,"icon5")}><img src={logo4} className="App-logo" alt="icond"/ > </div>
            </div>
            <div>{toShow}</div>
            <img src={logo5} className="App-logo" alt="logo" /> 
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>

          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        
        </header>
      </div>

    );
  }
}

export default App;
