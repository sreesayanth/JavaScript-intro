var read=require('readline-sync');
var mark=Number(read.question('Enter your mark '));
if(mark>100)
{
    console.log('enter a valid mark ')
}
else if(mark>=50)
{
    console.log('passed');
}
else
{
    console.log('failed');
}