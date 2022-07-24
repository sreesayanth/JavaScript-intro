var read=require('readline-sync');
var mark=Number(read.question('enter mark '));
if(mark>100)
{
    console.log('invalid input');
}
if(mark>90)
{
    console.log('A grade');
}
else if(mark>80)
{
    console.log('B grade');
}
else if(mark>70)
{
    console.log('C grade');
}
else if(mark>60)
{
    console.log('D grade');
}
else if(mark>50)
{
    console.log('D grade');
}
else if(mark<50)
{
    console.log('Failed');
}