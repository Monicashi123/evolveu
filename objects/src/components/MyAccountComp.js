import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Account from './Account'
import Greeting from './Greeting'

const checkingAccount = new Account(1,"checking account", 25);
// checkingAccount.deposit(6)
console.log(checkingAccount.Balance)

class AccountComp extends Component {
constructor() {
        super()
       
        this.state ={
           Balance: checkingAccount.Balance
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(event) {
           
        if (event.target.id === "btnDep") {
			let amount = document.getElementById("input1").value
			 console.log(amount)
	         this.setState({
	           Balance: checkingAccount.deposit(amount)
	                              
	         });
        } else if(event.target.id === "btnWit") {
        	let amount = document.getElementById("input2").value
        	console.log(amount)
        	 this.setState({
	           Balance: checkingAccount.withdraw(amount)
	                              
	         });       	
        }
               
    }

	render() {
		return(
			<div>
				 <h1>  Welcome to Bank of EvolveU </h1>
            <Greeting /> 
           
             <p>This is your {checkingAccount.acctName} </p> 
            
            <p>Your balance is: 
                <button className="Button"> {this.state.Balance} </button> 
	            </p>
	                <p>Deposit: 
	                    <input 
	                        id="input1"
	                        name="deposit" 
	                        type="number"                        
	                        placeholder="Please enter the amount" 
	                    />
	                     <button id="btnDep" onClick={this.handleClick} className="Button"> Submit </button> 
				</p>

                <p>Withdraw:         
                    <input 
                    	id="input2"
                        name="withdraw" 
                        type="number"                        
                        placeholder="Please enter the amount" 
                    />
                    <button id="btnWit" onClick={this.handleClick} className="Button"> Submit </button> 
                    </p>
                    <br />  

			</div>

			)
	}

}

export default AccountComp;