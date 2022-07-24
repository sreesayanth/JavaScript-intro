var read=require('readline-sync')
let size=read.question(' Enter the size of arrays ')
let a=[]
let b=[]
let c=[]
console.log(' Enter the values of array 1 ')
for(i=0;i<size;i++){
    a[i]=[]
    for(j=0;j<size;j++){
        a[i][j]=(Number(read.question()))
    }
}
console.log(' Enter the values of array 2 ')
for(i=0;i<size;i++){
    b[i]=[]
    for(j=0;j<size;j++){
        b[i][j]=(Number(read.question()))
    }
}
for(i=0;i<size;i++){
    c[i]=[]
    for(j=0;j<size;j++){
        c[i][j]=a[i][j]+b[i][j]
    }
}
console.log('Sum of 2 arrays is:')
for(i=0;i<size;i++){
    for(j=0;j<size;j++){
        process.stdout.write(' '+c[i][j])
    }
    console.log()
}
