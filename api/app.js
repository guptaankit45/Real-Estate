const express =require("express");
const authRoute=require("./routes/auth.route");
const postRoute=require("./routes/post.route");
const cookieparser =require("cookie-parser")
const app= express();

app.use(express.json());
app.use(cookieparser());

app.listen(8800,()=>{
    console.log("Server is running!");
});
app.use("/api/posts",postRoute);
app.use("/api/auth",authRoute);


