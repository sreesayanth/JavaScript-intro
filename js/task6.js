var read=require('readline-sync');
var day=Number(read.question('enter a number between 1 to 7 : '))
switch (day)
{
    case 1:
         console.log('sunday')
         break;
    case 2:
         console.log('monday')
         break;
    case 3:
         console.log('Tuesday')
         break;
    case 4:
        console.log('Wednesday')
        break;
    case 5:
        console.log('Thursday')
        break;
    case 6:
        console.log('Friday')
        break;
    case 7:
        console.log('Saturday')
         break;
    default:
        console.log('Enter valid input')
        break;
}