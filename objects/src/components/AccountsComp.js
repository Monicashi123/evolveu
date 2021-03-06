import React from 'react'
import CreateAcct from './CreateAcct'
import './AccountsComp.css'


class AccountsComp extends React.Component {
	constructor(props) {
		super(props)
    	this.state = {
    		newWindow: ""
		}
	}

    onClick = () => {
          this.setState({
            newWindow: <CreateAcct />
            })                 
    }

  render() {
		
		return (
		<div>
		<button id='create' className="CreateAcct" onClick={this.onClick}>Create New Account</button>
		{this.state.newWindow}		
		</div>
		)
	}
}

export default AccountsComp;