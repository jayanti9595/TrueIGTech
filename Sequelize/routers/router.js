const express = require("express");
const verifyToken = require("../Middleware/authorization");
const { getUser, addUser, updateUser, deleteUser } = require("../controllers/userController");
const router = express.Router();

const multer  = require('multer');
const { getPost, addPost, deletePost } = require("../controllers/postController");
const upload = multer();

router.get("/get_user",verifyToken,getUser);
router.post("/add_user",upload.none(),addUser);
router.patch("/edit_user",verifyToken,upload.none(),updateUser);
router.delete("/delete_user",verifyToken,upload.none(),deleteUser);
router.get("/get_post",verifyToken,getPost)
router.post("/add_post",verifyToken,upload.none(),addPost);
router.delete("/delete_post",verifyToken,upload.none(),deletePost);
module.exports = router;