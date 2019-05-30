class Accounts {
	constructor() {
		this.acctArray = []
	}

	add (numb) {
		this.acctArray.push(numb)
	}

	remove (numb) {
		this.acctArray.splice(numb,1)
	}

	sum () {
		const value = 0
		this.sum = this.acctArray.reduce((preVal, curVal) =>  preVal + curVal.startingBalance, value)
	}

	max () {
		const balanceArray = this.acctArray.map(a => a.startingBalance)
		this.maxAccount = Math.max(...balanceArray)
	}

	min () {
		const balanceArray = this.acctArray.map(a => a.startingBalance)
		this.minAccount = Math.min(...balanceArray)
	}
}

export default Accounts;