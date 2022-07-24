var read=require('readline-sync')
let w=Number(read.question('Enter the mark of Written test '))
let l=Number(read.question('Enter the mark of Lab exams  '))
let a=Number(read.question('Enter the mark of Assignments  '))
let grade=((w*70)/100+(l*20)/100+(a*10/100))
console.log('Grade of the student is '+grade)

