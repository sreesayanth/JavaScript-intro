var read=require('readline-sync');
let num=Number(read.question('enter a number '))
for(i=1;i<=num;i++){
    for(j=1;j<=i;j++){
        process.stdout.write(' '+j)
    }
    console.log()

}
