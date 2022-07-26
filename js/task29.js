let read=require('readline-sync')
function myFilter(myArray,callback){
    sum=0;
    for(i=0;i<size;i++){
        sum+=myArray[i];

    }
    if(callback(sum)==true){
        console.log('Even number')
    }
    else{
        console.log('Odd number')
    }
    return sum;
}
function callback(num){
    if(num%2==0){
        return true;
    }
    else{
        return false;
    }
}
let size=Number(read.question('Enter size of array :'))
a=[];
console.log('Enter the elements for array ')
for(i=0;i<size;i++){
    a[i]=Number(read.question())
}
console.log('Sum of array: '+myFilter(a,callback));