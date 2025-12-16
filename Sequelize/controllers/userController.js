const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");
require("dotenv").config()

const secret_key = process.env.SECRET_KEY;

const getUser = async (request, response) => {
    try {
        const user = await userModel.findAll({
            order : [
                ['user_id' , "DESC"]
            ]
        });
        return response.status(200).json({success : true, msg : "Data Found Successfully",user});
    } catch (error) {
       return response.status(500).json({success : false, msg : "error", error : error.message});
    }
}

const addUser = async (request, response) => {    
    const {name, age, email} = request.body;
    try {
        if(!name) {
            return response.status(500).json({success : true, msg : "Empt Params",key : "name"});  
        }
        if(!age) {
            return response.status(500).json({success : true, msg : "Empt Params",key : "age"});  
        }
        if(!email) {
            return response.status(500).json({success : true, msg : "Empt Params",key : "email"});  
        }
        const userInsert = await userModel.create({name : name,age : age, email : email});
        const payload = {email}
        const token = jwt.sign(payload, secret_key, {expiresIn : "7d"})
        return response.status(200).json({success : true, msg : "User Created Success",data : userInsert, token});  
    } catch (error) {
        return response.status(500).json({success : false, msg : "error", error : error.message}); 
    }
}

const updateUser = async (request, response) => {
    const {name, age, email, user_id} = request.body;
    try {
        if(!user_id) {
            return response.status(500).json({success : true, msg : "Empt Params",key : "user_id"});  
        }
        if(!name) {
            return response.status(500).json({success : true, msg : "Empt Params",key : "name"});  
        }
        if(!age) {
            return response.status(500).json({success : true, msg : "Empt Params",key : "age"});  
        }
        if(!email) {
            return response.status(500).json({success : true, msg : "Empt Params",key : "email"});  
        }
        const updateUser = await userModel.update({name, email, age }, {where : { user_id }});
        return response.status(200).json({success : true, msg : "User Updated successfully", updateUser});   
    } catch (error) {
       return response.status(500).json({success : false, msg : "error", error : error.message});  
    }
}

const deleteUser = async (request, response) => {
    const { user_id } = request.body;
    try {
        if(!user_id) {
            return response.status(500).json({success : true, msg : "Empt Params",key : "user_id"});  
        }
        const deleteUser = await userModel.destroy({where : {user_id}});
        return response.status(200).json({success : true, msg : "User Deleted successfully", deleteUser});   
    } catch (error) {
        return response.status(500).json({success : false, msg : "error", error : error.message});   
    }
}

module.exports = { getUser, addUser, updateUser, deleteUser }