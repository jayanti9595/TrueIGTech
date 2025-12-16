const userModel = require("./userModel");
const postModel = require("./postModel");

userModel.hasMany(postModel, {foreignKey : 'user_id'});
postModel.belongsTo(userModel, {foreignKey : "user_id"});
