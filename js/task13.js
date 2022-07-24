var read=require('readline-sync');
let flag=0;
let string=read.question('Enter a string ')
let limit=string.length
for(i=0;i<limit;i++)
{
    if(string[i]!=string[limit-i-1]){
        flag=1;
    }
}
if(flag==0){
    console.log('Entered string is a palindrome ')
}
else{
    console.log('Entered string is not a palindrome')
}