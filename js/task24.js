var read = require("readline-sync");
let choice

class area{

    circle(){
        let r=Number(read.question('enter the radius of circle : '))
        let area =3.1415*r*r
        console.log('Area = '+area)
    }
    square(){
        let a=Number(read.question('enter the side of square : '))
        let area =a*a
        console.log('Area = '+area)
    }
    rectangle(){
        let a=Number(read.question('enter the length of rectangle : '))
        let b=Number(read.question('enter the width of rectangle : '))
        let area =a*b
        console.log('Area = '+area)
    }
    triangle(){
        let a=Number(read.question('enter the length of triangle : '))
        let b=Number(read.question('enter the width of triangle: '))
        let area =(a*b)/2
        console.log('Area = '+area)

    }


}
class myclass extends area{

    choice(){
        let cho=Number(read.question('Enter your choice 1.Circle 2.Square 3.Rectangle 4.Triangle '))
        switch(cho){
            case 1:
                super.circle()
                break;
            case 2:
                super.square()
                break;
            case 3:
                super.rectangle()
                break;
            case 4:
                super.triangle()
                break;
            default:
                console.log('invalid input')
        }
    }
    main()
    {
        console.log(' MAIN')
        obj.choice();
    
    }

}

let obj=new myclass();
obj.main();