var crypto = require('crypto-js');

var secretMessage = {
    name: 'Matt Bishop',
    secretName: 'Batman'
};
var secretKey = '123ABC';

//Encrypt
var encryptedMessage = crypto.AES.encrypt(JSON.stringify(secretMessage), secretKey);
console.log('Encrypted Message: '+ encryptedMessage);

//Decrypt
var bytes = crypto.AES.decrypt(encryptedMessage, secretKey);
var decryptedMessage = JSON.parse(bytes.toString(crypto.enc.Utf8));

console.log('Decrypted message: ' + decryptedMessage);
console.log(secretMessage.secretName);