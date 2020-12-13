const fs=require('fs');
fs.readFile('task.json',function(err,data){
    if(err) throw err;
    const users = JSON.parse(data);   //to come in javascript object we use parse because data is in string//
    //   console.log(users);


      for (let i of users){
          console.log(i["name"])
      } 
})
