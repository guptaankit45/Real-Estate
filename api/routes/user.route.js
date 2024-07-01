const express = require("express");

const{getUser,getUsers,updateUser,deleteUser,savePost,profilePosts,getNotificationNumber} = require("../controllers/user.controller.js")
const {verifyToken}=require("../middleware/verifyToken.js")
const router = express.Router();

router.get("/",getUsers);
// router.get("/:id",verifyToken,getUser);
router.put("/:id",verifyToken,updateUser);
router.delete("/:id",verifyToken,deleteUser);
router.post("/save",verifyToken,savePost);
router.get("/profilePosts",verifyToken,profilePosts);
router.get("/notification",verifyToken,getNotificationNumber);

module.exports=router;
