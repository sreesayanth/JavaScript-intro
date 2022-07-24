var read = require("readline-sync");
let a
let limit
class array{    
     getArray(){

        console.log("Now enter the array elements");
        for(var i= 0;i<limit;i++){
            a[i]=[]
            {
                for(var j=0;j<limit;j++)
                {
                    a[i][j]=Number(read.question(""));
                }
            }
        }
    }
    displayArray(){
        console.log("And now printhing the array ")
        for(var i=0;i<limit;i++){
            for(var j=0;j<limit;j++)
            {
                process.stdout.write(a[i][j]+" ");
            }
            console.log("");
        }
    }
    main(){
        console.log("this is main")
         a=[];
         limit=Number(read.question("Enter the limit"))
        obj.getArray()
        obj.displayArray()
    }
}
let obj=new array();
obj.main()
