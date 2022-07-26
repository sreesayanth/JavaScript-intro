var read=require('readline-sync')
let height;
function check(){
    height=read.question('Enter the height ')

    if(isNaN(height)==true){
        throw "not A Number Error"
    }
    else if(height>200){
        throw "huge Height Error"
    }
    else if(height<40){
        throw "tiny Height Error"
    }
}
try{
    check()
}
catch(error){
    console.log('an Error occurd '+(error));
}
finally{
    console.log('end')
}