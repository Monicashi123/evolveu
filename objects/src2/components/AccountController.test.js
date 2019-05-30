import Account from './Account2.js'
import AccountController from './AccountController.js'

test('Test AccountController functions', () => {
	const conTest = new AccountController()
	const Mike = new Account('Mike', 200)
    const Tracy = new Account('Tracy', 150)
    const Mat = new Account('Mat', 100)
	
	// add new accounts
	conTest.add(Mike)
	expect(conTest.acctArray[0]).toBe(Mike)
	console.log('add Mike account:', conTest.acctArray[0].startingBalance)

    conTest.add(Tracy)
    expect(conTest.acctArray[1]).toBe(Tracy)
    console.log('add Tracy account:', conTest.acctArray[1].accountName)

    conTest.add(Mat)
    expect(conTest.acctArray[2]).toBe(Mat)
    console.log('add Mat account:', conTest.acctArray[2].accountName)
	
	// remove account
	conTest.remove(1)
	console.log('removed')
    expect(conTest.acctArray[0]).toBe(Mike)
    // conTest.remove(1)
    expect(conTest.acctArray[1]).toBe(Mat)
    // conTest.remove(2)
    expect(conTest.acctArray[2]).toBe()

	// sum amount
	conTest.sum()
	console.log('sum', conTest.sum)
	expect(conTest.sum).toBe(300)

	// max amount
	conTest.max()
	console.log('max', conTest.maxAccount)
	expect(conTest.maxAccount).toBe(200)
	
	// min amount
	conTest.min()
	console.log('min', conTest.minAccount)
	expect(conTest.minAccount).toBe(100)
})