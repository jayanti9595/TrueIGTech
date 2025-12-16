const { DataTypes } = require("sequelize");
const sequelize = require("../connection/dbConfig");
const postModel = sequelize.define("post", {
    post_id : {
        type : DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement : true,
    },
    user_id : {
        type : DataTypes.INTEGER,
        allowNull : false,
    },
    title : {
        type : DataTypes.STRING,
        allowNull : false
    },
    description : {
        type : DataTypes.STRING,
        allowNull : false
    }
});


module.exports = postModel;