// const fs = require("fs");  
// // Read users.json file 
// fs.readFile("task.json", function(err, data){ 
//     // Check for errors 
//     if (err) throw err; 
   
//     // Converting to JSON 
//     const users = JSON.parse(data);   //to come in javascript object we use parse because data is in string//
//       // console.log(users);
//       var del=delete users[0]
//       console.log(users)  
// }); 
                                 

const fs=require('fs');
const file=require('./task.json');
fs.readFile("task.json",'utf8',function(err,data){
  const users=JSON.parse(data);
  var del=delete users[0]
  console.log(del)      //true//
  console.log(users)
  fs.writeFile('task.json',JSON.stringify(users),err =>{
    if (err) throw err;
  })
})   
    
    
    
  //   console.log(typeof(users))
  // console.log(users)
  // console.log(typeof(data))
  // var del=delete file[0] 

