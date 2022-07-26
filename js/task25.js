var read = require('readline-sync')
let libray = [
    {
        title:'Bill Gates',
        author:'The Road Ahead',
        readingStatus: true
    },
    {
        title:'Steve Jobs',
        author:'Walter Lsaacson',
        readingStatus: true
    },
    {
        title:'Mockingjay: The Final Book of The Hunger Games',
        author:'Suzanne Collins',
        readingStatus:false
    }
];
for(let x in libray){
    if(libray[x].readingStatus==true){
        console.log('Already read  '+libray[x].author+' by '+libray[x].title)
    }
    else{
        console.log('You still need to read '+libray[x].author+' by '+libray[x].title)
    }
}