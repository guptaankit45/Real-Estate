const express=require("express");
const {verifyToken} = require("../middleware/verifyToken.js")
const router=express.Router();
const {getPost,getPosts,updatePost,deletePost,addPost} = require("../controllers/post.contoller.js");


router.get("/", getPosts);
router.get("/:id", getPost);
router.post("/", verifyToken, addPost);
router.put("/:id", verifyToken, updatePost);
router.delete("/:id", verifyToken, deletePost);

module.exports= router;

