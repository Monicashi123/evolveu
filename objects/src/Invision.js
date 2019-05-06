import React, { Component } from 'react';
import invision from './invision.svg'

class Invision extends Component {
    constructor() {
        super()
        this.state = {
            isLoggedIn: true
        }
        this.handleClick= this.handleClick.bind(this)
    }
    
      handleClick(){
        this.setState(prevState=>{
          return{
            isLoggedIn:!prevState.isLoggedIn
            
          }
        })
      }
    render() {
       let displayText = this.state.isLoggedIn ? "Logged in" : "Logged out"
       return (
        <div>
           <img src={invision} className ="Button" alt="invision" height="60" width="60" onClick={this.handleClick}/>
           <p>Click invision to  {displayText}</p>
        </div>
       )
        
    }
}


export default Invision