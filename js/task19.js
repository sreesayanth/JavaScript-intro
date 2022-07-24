var read=require('readline-sync')
let income=Number(read.question('Enter the annual income : '))
if( income<=250000){
    console.log('Income tax amount is 0')
}
else if(income<=500000){
    let tax= income*5/100
    console.log('Income tax amount is '+tax)
}
else if(income<=1000000){
    let tax= income*20/100
    console.log('Income tax amount is '+tax)
}
else if( income<=5000000){
    let tax= income*30/100
    console.log('Income tax amount is '+tax)
}