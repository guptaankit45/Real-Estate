const express =require("express");
const cors =require("cors");
const authRoute=require("./routes/auth.route.js");
const postRoute=require("./routes/post.route.js");
const cookieparser =require("cookie-parser");
const testRoute= require("./routes/test.route.js")
const userRoute = require( "./routes/user.route.js");
const chatRoute=require("./routes/chat.route.js");
const messageRoute=require("./routes/message.route.js");
const app= express();
require('dotenv').config();

app.use(cors({origin:process.env.CLIENT_URL,credentials: true}))
app.use(express.json());
app.use(cookieparser());


app.use("/api/posts",postRoute);
app.use("/api/auth",authRoute);
app.use("/api/test",testRoute);
app.use("/api/users", userRoute);
app.use("/api/chats", chatRoute);
app.use("/api/messages", messageRoute);


app.listen(8800,()=>{
    console.log("Server is running!");
});


