var read=require('readline-sync');
let a=[];
let limit=read.question('Enter the size of an array')
console.log(' Enter the values of array')
for(i=0;i<limit;i++){
    a.push(Number(read.question()))
}

for(i=0;i<limit;i++){
    for(j=i+1;j<limit;j++){
        if(a[i]<a[j]){
            temp=a[i];
            a[i]=a[j];
            a[j]=temp;
        }
    }
}
console.log(' Sorted array:')
for(i=0;i<limit;i++){
    process.stdout.write(' '+a[i])
}