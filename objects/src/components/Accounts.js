import Account from './Account';

class Accounts {
	constructor(props) {
		this.acctList = [];
		this.acctID = 0;
	}
	
	addAccount(acctName, Balance) {
		const newAccount = new Account(this.acctID++, acctName, Balance);
		this.acctList.push(newAccount);		
	}
	
	findAcctID(i) {
		let x = this.acctList.findIndex(function(e){
			return e.acctID ===i
		})
		return x;

	}

	delAccount(acctID) {
		// console.log("acctid", acctID)
		// console.log("before splice",this.acctList)
		this.acctList.splice(this.findAcctID(acctID),1)
		// console.log("after splice",this.acctList)
		return this.acctList;
	}

	nameAccount(acctID, newName) {
		this.acctList.forEach(item => {
			// console.log("before rename", item, item.acctName, item.acctID, acctID)
			// console.log("item.acctName is ", item.acctName)
			if(item.acctID===acctID) {
				item.acctName = newName
				// console.log("after rename", item.acctName)
				return				
			}
		})		
	}


	getMaxAccount(acctList) {
		return this.acctList.reduce(function (acct1, acct2) {
		return ( acct1.Balance > acct2.Balance ? acct1 : acct2 );
	 	});		
	}
	
	getMinAccount() {
		return this.acctList.reduce(function (acct1, acct2) {
		return ( acct1.Balance < acct2.Balance ? acct1 : acct2 );
	 	});		
	}

	getTotalBalance() {
		var initialBalance = 0;
		var TotalBalance = this.acctList.reduce(function (accumulator, account) {
			// console.log('accumulator', accumulator)
    		return accumulator + account.Balance;
		}, initialBalance)
		return TotalBalance;
	
	}
	

}

export default Accounts;