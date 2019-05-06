class Account {
	constructor (balc,accname) {
		this.balc = parseInt(balc)
		this.accname = accname;
	}
	check() {
		return this.balc;
	}
	deposit(value) {
		return this.balc = this.balc + value;
	}
	withDraw(value) {
		return this.balc = this.balc - value;
	}
}
export default Account;