const express = require("express");
const cors = require("cors");
const router = require("./routers/router");
const app = express();

const sequelize = require("./connection/dbConfig")
require("./models");

sequelize.sync({ alter: true }).then(() => console.log("All tables created")).catch(err => console.log(err));

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

app.use("/user", router);

app.listen(3000, ()=>{
    console.log("Server connect successfully..!!");
})