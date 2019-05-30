import React, {component} from 'react';
import Account from './account.js';


class AccountApp extends React.Component {
  constructor(props) {
      super(props);
      this.state={
      	input1: '',
      	account: new Account(0,"checking"),

      }
      
      this.deposit = this.deposit.bind(this);
      this.withdraw = this.withdraw.bind(this);
      this.handleChange = this.handleChange.bind(this);
  }
  
  deposit() {
  	this.state.account.deposit(Number(this.state.input1))
  	this.setState({input1: ''})
    
  }

  withdraw() {
  	this.state.account.withDraw(Number(this.state.input1))
  	this.setState({input1: ''})
    
  }

  handleChange (event) {
  	const {name,value} = event.target;
  	this.setState({[name]: value})
  
 }


  render() {
      return (

	<div className="bankname">
				<h1>This is Monica Banking</h1>

				<input type="number" value={this.state.input1} name='input1' onChange={this.handleChange} />

         <div>
            <button onClick = {this.deposit}>Deposit </button>
            <button onClick = {this.withdraw}>Withdraw</button>
            <Content myNumber = {this.state.account.check()}></Content>
         </div>


    </div>

      );
    }
}


class Content extends React.Component {
  componentWillMount() {
      console.log('Component WILL MOUNT!')
  }


  // componentDidMount() {
  //      console.log('Component DID MOUNT!')
  // }
  // componentWillReceiveProps(newProps) {
  //       console.log('Component WILL RECEIVE PROPS!')
  // }
  // shouldComponentUpdate(newProps, newState) {
  //       return true;
  // }
  // componentWillUpdate(nextProps, nextState) {
  //       console.log('Component WILL UPDATE!');
  // }
  // componentDidUpdate(prevProps, prevState) {
  //       console.log('Component DID UPDATE!')
  // }
  // componentWillUnmount() {
  //        console.log('Component WILL UNMOUNT!')
  // }
 
    render() {
      return (
        <div>
          <h2>{this.props.myNumber}</h2>
        </div>
      );
    }
}


export default AccountApp

   