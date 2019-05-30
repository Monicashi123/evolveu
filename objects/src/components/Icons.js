import React, { Component } from 'react';
import logo11 from './creative.svg'
import logo15 from './logo4.png'
import logo13 from './logo1.png'
import logo14 from './debt.svg'
import logo from './logo.svg'
import logo12 from './calculator.svg'
import logo16 from './search.svg'
import MathComp from "./MathComp"
import FirstPage from './FirstPage'
import AccountComp from './AccountComp'
import AccountsComp from './AccountsComp'
import CommComp from './CommComp'
// import './Button.css'
import ListComp from './ListComp'
import FIFOComp from './FIFOComp'

class Icons extends Component {
    constructor() {
      super()
      this.state ={
        myState: ""
      }
    }
    onPushMe = (e) => {
        if (e.target.id==="logo11"){
            this.setState({
            myState: <FIFOComp/>

            })

         } else if (e.target.id==="logo12"){
        
         this.setState({
           myState: <MathComp />
              
            }) 



        } else if (e.target.id==="logo13"){
        
         this.setState({
                myState: <AccountComp />
            }) 

         }else if (e.target.id==="logo14"){
            this.setState({
              myState: <AccountsComp/>
            })
       
        } else if (e.target.id==="logo15"){
             this.setState({
                myState: <CommComp/>
              })

        }else if (e.target.id==="logo16"){
              this.setState({
                myState: <ListComp/>
              })
        }              
      }
    
     
    render() {
      
       return (
        <div>

            <img src={logo11} id="logo11" className="Button" alt="creative icon" height="40" width="50" onClick={this.onPushMe}/>
            <img src={logo12} id="logo12" className="Button" alt=" math icon" height="40" width="40" onClick={this.onPushMe}/>
            <img src={logo13} id="logo13" className="Button" alt="calculation icon" height="40" width="40" onClick={this.onPushMe}/>
            <img src={logo14} id="logo14" className="Button" alt="debt icon" height="40" width="40" onClick={this.onPushMe}/>
            <img src={logo15} id="logo15" className="Button" alt="offical  icon" height="40" width="50" onClick={this.onPushMe}/>
            <img src={logo16} id="logo16" className="Button" alt="search icon" height="40" width="40" onClick={this.onPushMe}/>

            {this.state.myState}

            <div className="App">
            <header className="App-header">
            <img src={require('./logo.svg')} className="App-logo" alt="logo" />
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            <a  className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer">
                Learn React
            </a>
            </header>
        </div>  

      </div>      

       )
        
    }
}

document.getElementById('root')
export default Icons