const { Sequelize } = require("sequelize");
const sequlize = new Sequelize("Employee", "postgres", "root", {
    host : "localhost",
    dialect: "postgres",
    logging: false
});

module.exports = sequlize;