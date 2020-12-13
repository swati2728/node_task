const fs = require("fs"); 
   
// Read users.json file 
fs.readFile("task.json", function(err, data){ 
      
    // Check for errors 
    if (err) throw err; 
   
    // Converting to JSON 
    const users = JSON.parse(data);   //to come in javascript object we use parse because data is in string//
      console.log(users);
}); 
                                                                      