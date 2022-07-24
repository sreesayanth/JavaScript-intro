var read=require('readline-sync')
let a=[]
let b=[]
let c=[]
let limit=Number(read.question('Enter the size of array '))
getArray(limit)
addArray(limit)
displayArray(limit)


function getArray(limit)
{
    console.log('Enter the values of array 1')
    for(i=0;i<limit;i++){
        a[i]=[]
        for(j=0;j<limit;j++){
            a[i][j]=Number(read.question())
        }
        
    }
    console.log('Enter the values of array 2')
    for(i=0;i<limit;i++){
        b[i]=[]
        for(j=0;j<limit;j++){
            b[i][j]=Number(read.question())
        }
    }
}
function addArray(limit)
{
    for(i=0;i<limit;i++){
        c[i]=[]
        for(j=0;j<limit;j++){
            c[i][j]=a[i][j]+b[i][j];
        }
    }
}
function displayArray(limit)
{
    console.log('Sum of array 1 and array 2:    ')
    for(i=0;i<limit;i++){
        for(j=0;j<limit;j++){
            process.stdout.write(' '+c[i][j])
        }
        console.log()
    }
}