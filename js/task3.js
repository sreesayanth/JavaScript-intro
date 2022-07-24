var read=require('readline-sync');
var p=Number(read.question('Enter Principal amound '));
var r=Number(read.question('Enter interest rate '));
var n=Number(read.question('enter number of years '));
var si=((p*r*n)/100);
console.log('simple interest '+si);