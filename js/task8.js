var read=require('readline-sync');
let num=Number(read.question('enter a number '))
let sum=0;
for(i=1;i<=num;i=i+2)
{
    sum+=i;
}
console.log(sum+'\t');