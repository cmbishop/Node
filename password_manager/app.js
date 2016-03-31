console.log('starting password manager');

var storage = require('node-persist');
storage.initSync();

//account.name
//account.username
//account.password

function createAccount (account) {
	var accounts = storage.getItemSync('accounts');
	
	if (typeof accounts === 'undefined') {
		accounts = [];
	}

	accounts.push(account);
	storage.setItemSync('accounts', accounts);

	return account;
}

function getAccount (accountName) {
	var accounts = storage.getItemSync('accounts');
	var matchedAccount;

	accounts.forEach(function (account) {
		if (account.name === accountName) {
			matchedAccount = account;
		}
	});

	return matchedAccount;

}

//testing

// createAccount({
// 	name: 'Matt',
// 	username: 'matt@email.com',
// 	password: '1234'
// });

// var mattAccount = getAccount('Matt');
// console.log(mattAccount);

