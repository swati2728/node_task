const fs=require('fs');
const details=require('./task.json');

let info ={
    Name:'sanika',
    age:'21',
    education:'doctor'
};
details.push(info);

fs.writeFile('task.json',JSON.stringify(details),err =>{
    if (err) throw err;
    console.log("done writeing")
});  

