var read=require('readline-sync')
let a=[]
let b=[]
let limit=Number(read.question('Enter the array limit : '))
console.log('Enter the values of array ')
for(i=0;i<limit;i++){
    a[i]=Number(read.question())
}
for(i=0;i<limit;i++){
    b[i]=a[i]*a[i+1];
}
console.log('Output ')
for(i=0;i<limit-1;i++){
    process.stdout.write(' '+b[i])
}
