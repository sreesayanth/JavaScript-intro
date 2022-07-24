var read=require('readline-sync')


class task{
    addition(a,b) {
        let sum=a+b;
        console.log('sum = '+sum)
    }
    subtraction(a,b) {
        let sub=a-b
        console.log('subtract '+sub)
    }
    multiplication(a,b){
        let mul=a*b
        console.log('multiplication '+mul) 
    }
    division(a,b){
        let div=a/b
        console.log('division '+div)
    }


main()
{
    let a=Number(read.question('Enter value for a  '))
    let b=Number(read.question('Enter value for b  '))
    let opt=Number(read.question('select your option 1.addition, 2.subtraction, 3.multiplication and 4.division    '))
    switch(opt){
        case 1:
            obj.addition(a,b)
            break;
        case 2:
            obj.subtraction(a,b)
            break;
        case 3:
            obj.multiplication(a,b)
            break;
        case 4:
            obj.division(a,b)
            break;
        default:
            console.log('enter the valid input ');


    }
}
}
let obj=new task()
obj.main();