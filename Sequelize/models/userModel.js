const { DataTypes } = require("sequelize");
const sequlize = require("../connection/dbConfig");
const userModel = sequlize.define("User", {
    user_id : {
        type : DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name : {
        type : DataTypes.STRING,
        allowNull: false
    },
    email: {
        type : DataTypes.STRING,
        allowNull: true
    }
});


module.exports = userModel;
