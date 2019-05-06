import React, { Component } from 'react';
import Account from './Account'
import Greeting from './Greeting'

class AccountComp extends Component {
constructor() {
        super()
        
        this.checkingAccount = new Account(1,"", 200);
        this.state ={
           Balance: this.checkingAccount.Balance
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(event) {
     
         
        if (event.target.id === "btnDep") {
			let amount = document.getElementById("input1").value
			 console.log(amount)
	         this.setState({
	           Balance: this.checkingAccount.deposit(amount)
	                              
	         });
        } else if(event.target.id === "btnWit") {
        	let amount = document.getElementById("input2").value
        	console.log(amount)
        	 this.setState({
	           Balance: this.checkingAccount.withdraw(amount)
	                              
	         });       	
        }
               
    }

	render() {
		return(
			<div>
                      <Greeting /> 
				 <h1>  Welcome to RBC Bank </h1>
                    
             <p>{this.checkingAccount.acctName} </p> 
            
            <p>Your balance is: 
                <button className="Button"> {this.state.Balance} </button> 
	        </p>
	        <p>Deposit amount here : 
                <input 
                    id="input1"
                    name="deposit" 
                    type="number"                        
                    placeholder="Please enter the amount" 
                />
               <button id="btnDep" onClick={this.handleClick} className="Button"> Enter </button> 
			</p>

            <p>Withdraw amount here:         
                <input 
                    name="withdraw" 
                	id="input2"
                    type="number"                        
                    placeholder=" Please enter the amount : " 
                />
                <button id="btnWit" onClick={this.handleClick} className="Button"> Enter </button> 
            </p>
            <br />  

			</div>

			)
	}

}


export default AccountComp;