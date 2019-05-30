import React from 'react'
// import './AccountComp.css'

class AccountInfo extends React.Component {
	render(props) {

    	const acctDisplay = this.props.accountInfoArray.acctArray.map((account, index) => 
			<div className='acctDiv' key={account.acctName+'-'+index}>
				<div className='acctHeading'>
					<p className='bal'>Account:</p>
					<p className='bal2'>{account.accountName}</p>
				</div>
				<div className='acctHeading'>
					<p className='bal'>Balance:</p>
					<p className='bal2'>${account.startingBalance}</p>
				</div>
				<div>
					<div className='updated'>
                        <input className='upAmount' placeholder='Amount to Enter!' 
                        type='number' onChange={this.props.update} id={index}></input>
						<button className='upButton' onClick={this.props.deposit} id={index}>Deposit</button>
						<button className='upButton' onClick={this.props.withdraw} id={index}>Withdraw</button>				
					</div>
					<button className='remove' onClick={this.props.remove} id={index}>Remove</button>
				</div>
			</div>)

		this.props.accountInfoArray.max()
		const maxAmount = this.props.accountInfoArray.maxAccount		
		const maxDisplay = 
			<div className='minMax'>
				<p id='max'>Highest Amount: ${maxAmount}</p>
			</div>

		this.props.accountInfoArray.min()
		const minAmount = this.props.accountInfoArray.minAccount		
		const minDisplay = 
			<div className='minMax'>
				<p id='min'>Lowest Amount: ${minAmount}</p>
			</div>

		return(
		<div className='abc'>
			
			<div>
				{acctDisplay}
			</div>
			<div className='balanceCompare'>
				{maxDisplay}
				{minDisplay}
			</div>
		</div>
		)
	
	}
}

export default AccountInfo;