const fs = require("fs");
fs.readFile("text.txt", 'utf-8', (err, data) => {
    if(err) return err
    console.log(data);
})