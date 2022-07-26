var read=require('readline-sync')
let string
function inputString() {
    string=read.question('Enter a string : ')
    let split_str=string.split('');
    let rev_str=split_str.reverse();
    let join_str=rev_str.join('')
    console.log('the string is '+join_str)

    
}
try{
    inputString();
}
catch(error){
    console.log('an error has occeured: enter valid input'+error);

}
finally{
    console.log('type of entered string is '+typeof(string));
}