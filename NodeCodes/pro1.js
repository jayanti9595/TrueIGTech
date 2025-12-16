const fs =  require('fs');
const path = require("path");
// fs.writeFile("text.txt","Hello Jayanti !!",(err) => {
//     if(err) return err
//     console.log("Data write successfully")
// });

// fs.writeFileSync("text.txt","Hello Hi !!");

fs.appendFileSync(path.join(__dirname,"text.txt"), " Data Append Successfully");