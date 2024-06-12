const express =require("express");
const cors =require("cors");
const authRoute=require("./routes/auth.route");
const postRoute=require("./routes/post.route");
const cookieparser =require("cookie-parser");
const testRoute= require("./routes/test.route")
const userRoute = require( "./routes/user.route");
const app= express();
require('dotenv').config();

app.use(cors({origin:process.env.CLIENT_URL,credentials: true}))
app.use(express.json());
app.use(cookieparser());

app.listen(8800,()=>{
    console.log("Server is running!");
});
app.use("/api/posts",postRoute);
app.use("/api/auth",authRoute);
app.use("/api/test",testRoute);
app.use("/api/users", userRoute);


