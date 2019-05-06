import React from 'react'
// import Greeting from "./Greeting"
import Accounts from './Accounts'
import AccountList from "./AccountList"
import './AccountsComp.css'

class AccountsComp extends React.Component {
	constructor(props) {
        super(props)
        this.state = {
        	counter: 0,
        	bank:  new Accounts(),
        	acctName:null,
        	Balance:0,
        	maxBalance: 0,
        	minBalance: 0,
        }
        this.handleClick = this.handleClick.bind(this)
        // this.handleDelete = this.handleDelete.bind(this)
        this.acctList = this.state.bank.acctList
        // this.acctID = this.state.bank.acctList[this.state.counter].acctID;
        
    }

	handleClick =(event) =>{
	       
	if(event.target.id ==="input1")
			{
				this.setState({
					acctName: event.target.value

				})
				console.log("this aacount",this.state.acctName)
			}
			else if(event.target.id ==="input2")
			{
				this.setState({
					Balance: event.target.value
				})
			}

     else {
		alert('Please select account type !')
	}     	
    }

    onCreate = ()=> {

       	const accountList= this.state.bank;
        accountList.addAccount(this.state.acctName,this.state.Balance)
    	console.log("oncreate log",accountList)
    	this.setState({
            // counter: this.state.counter + 1,
            maxBalance: accountList.getMaxAccount().Balance,
            minBalance: accountList.getMinAccount().Balance,
            
        })
	     
	}
        
	handleDelete =(acctID) => {
         
       const arr= this.state.bank;        
       arr.delAccount(acctID);
       	this.setState({
	        counter: this.state.counter + 1,
	        bank: arr
		})
                
    }

  	render() {
  		const bankHolder = this.state.bank.acctList;
  		console.log("bankHolder", bankHolder)
  		const renderList = bankHolder.map(item => {
  			return <AccountList key={item.acctID}
  								bankObj={item}
  								handleDelete= {this.handleDelete}
  					/>

  		})
  		        return (
		    <div>
		    	<h1>  Welcome to RBC Bank </h1>            	
            	<h3  id="BtnCreateAcct" className="CreateAcct">Start to creat a new account now! </h3>
            	<div className='cardContainer'>
            			<div>
							<p>Maximum : {this.state.maxBalance}</p>
							<p>Minimum : {this.state.minBalance}</p>
						</div>
	            	 
	            		<div  className= 'typeSelect' >
	             			
							<p>Account Name: 
			                    <input className= 'input'
			                        id="input1"
			                        name="acctName" 			                                           
			                        placeholder="Please enter the acctName" 
			                        onChange={this.handleClick}
			                    />	                  
							</p>	
							<p>Deposit $$: 
			                    <input className= 'input'
			                        id="input2"
			                        name="deposit" 
			                        type="number"                        
			                        placeholder="Please enter the amount" 
			                        onChange={this.handleClick}
			                    />	                  
							</p>	
							<button id="BtnCreateAcct" onClick={this.onCreate}  className="Button" > Create Another Account </button> 	
						</div>					
						
				</div>
				{renderList}
			</div>
		)
	}
}

export default AccountsComp;