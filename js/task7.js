var read=require('readline-sync')
let num=Number(read.question('Enter a number : '))
for(i=1;i<=10;i++){
    console.log(i+' * '+num+' = '+i*num);
}