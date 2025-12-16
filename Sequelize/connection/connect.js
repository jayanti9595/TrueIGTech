const sequlize =  require("./dbConfig");
sequlize.authenticate().then(() =>{
    console.log("Database connect successfully");
}).catch((err) => {
    console.log("Error in connection");
})