import React from 'react'
import CreateCity from './CreateCity'
// import './AccountsComp.css'


class CommComp extends React.Component {
	constructor(props) {
		super(props)
    	this.state = {
    		newWindow: ""
		}

	}

    onClick = () => {
          this.setState({
            newWindow: <CreateCity />
            })                 
    }

  render() {
		
		return (
		<div>
		<button id='create' className="CreateAcct" onClick={this.onClick}>Welcome to City Community!</button>
		{this.state.newWindow}		
		</div>
		)
	}
}

export default CommComp;