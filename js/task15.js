var read=require('readline-sync')
let array=[]
let limit
function getArray(){
    limit=read.question('enter the limit of array ')
    for(i=0;i<limit;i++){
        array[i]=Number(read.question())
    }
}

function displayArray(){
    console.log('array is')
    for(i=0;i<limit;i++){
        process.stdout.write(' '+array[i])
    }
}
getArray()
displayArray()