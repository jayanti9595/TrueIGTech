const postModel = require("../models/postModel");
const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const getPost = async (request, response) => {
    try {
        const post = await postModel.findAll({
            order : [
                ['post_id' , "DESC"]
            ],
            include: [
                {
                    model: userModel,
                    attributes: ['user_id', 'name', 'email']
                }
            ]
        });
        return response.status(200).json({success : true, msg : "Data Found Successfully",post : post});
    } catch (error) {
       return response.status(500).json({success : false, msg : "error", error : error.message});
    }
}
const addPost = async (request, response) => {    
    const {title, description,user_id} = request.body;
    try {
        if(!title) {
            return response.status(500).json({success : true, msg : "Empt Params",key : "title"});  
        }
         if(!user_id) {
            return response.status(500).json({success : true, msg : "Empt Params",key : "user_id"});  
        }
        if(!description) {
            return response.status(500).json({success : true, msg : "Empt Params",key : "description"});  
        }
        const postInsert = await postModel.create({title : title,description : description,user_id : user_id});
        return response.status(200).json({success : true, msg : "Post Created Success",data : postInsert});  
    } catch (error) {
        return response.status(500).json({success : false, msg : "error", error : error.message}); 
    }
}
const deletePost = async (request, response) => {
    const { post_id } = request.body;
    try {
        if(!post_id) {
            return response.status(500).json({success : true, msg : "Empt Params",key : "post_id"});  
        }
        const deleteUser = await postModel.destroy({where : {post_id : post_id}});
        return response.status(200).json({success : true, msg : "Post Deleted successfully", deleteUser});   
    } catch (error) {
        return response.status(500).json({success : false, msg : "error", error : error.message});   
    }
}

module.exports = { getPost, addPost, deletePost }