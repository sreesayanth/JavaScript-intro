var read=require('readline-sync')
let num=Number(read.question('enter a number ')) 
let flag=0
for(i=2;i<num/2;i++){
    if(num%i==0){
        flag=1
    }
}
if(flag==0){
    console.log('Entered number is a Prime number')
}
else{
    console.log('Entered number is not a Prime number')
}