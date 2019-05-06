import React from 'react';

class AccountList extends React.Component {
  constructor(props) {
        super(props);
        console.log("props",props);
          this.state = {
          Balance: this.props.bankObj.Balance,
          acctList:this.props.acctList,
          
        };   
        this.handleClick = this.handleClick.bind(this)
        
    }

  handleClick(event) {
          
        if (event.target.id === "BtnDep") {
          let amount = document.getElementById("input").value
          console.log(amount)
          this.setState({
            Balance: this.props.bankObj.deposit(amount)                                
           });
        } else if(event.target.id === "BtnWit") {
            let amount = document.getElementById("input").value
            console.log(amount)
            this.setState({
                Balance: this.props.bankObj.withdraw(amount)                                
            });        
          }                
    }
    

  render(props) {  
      
    return(    
      <div className = "acctInfoContainer">
        <p>Account Name: {this.props.bankObj.acctName}</p>
        <p>Balance: {this.props.bankObj.Balance}</p>        
        <input 
          id="input"
          name="deposit" 
          type="number"                        
          placeholder="Please enter the amount" 
        /> 
        <p>         
          <button id="BtnDep" onClick={this.handleClick}  className="Button" > Deposit</button>      
          <button id="BtnWit" onClick={this.handleClick}  className="Button" > Withdraw</button> 
          <button id="BtnDel" onClick={this.props.handleDelete}  className="Button" > Delete </button>
         </p> 
      </div> 
    )
  }
}



  
export default AccountList;