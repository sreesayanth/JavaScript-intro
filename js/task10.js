var read=require('readline-sync');
let a=[];
let b=[];
let limit=read.question('enter the limit : ');
console.log('Enter the values of Array 1')
for(i=0;i<limit;i++){
    a.push(Number(read.question()))
}
console.log('Enter the values of Array 2')
for(i=0;i<limit;i++){
    b.push(Number(read.question()))
}
for(i=0;i<limit;i++){
    temp=a[i]
    a[i]=b[i]
    b[i]=temp
}
console.log(' Arrays after swapping:')
for(i=0;i<limit;i++){
    process.stdout.write(' '+a[i])
}
console.log()
for(i=0;i<limit;i++){
    process.stdout.write(' '+b[i])
}
console.log()
