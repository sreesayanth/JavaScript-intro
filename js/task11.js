var read=require('readline-sync');
let a=[]
let flag=0;
let limit=read.question('Enter the size of an array')
console.log('Enter the values of array')
for(i=0;i<limit;i++){
    a.push(Number(read.question()))
}
for(i=0;i<limit;i++){
    if(a[i]%2!=0){
        flag++;
    }
}
console.log(' Number of even numbers in the given array is '+flag)