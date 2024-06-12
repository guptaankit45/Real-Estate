const express = require("express");

const{getUser,getUsers,updateUser,deleteUser} = require("../controllers/user.controller.js")
const {verifyToken}=require("../middleware/verifyToken.js")
const router = express.Router();

router.get("/",getUsers);
router.get("/:id",verifyToken,getUser);
router.put("/:id",verifyToken,updateUser);
router.delete("/:id",verifyToken,deleteUser);

module.exports=router;
