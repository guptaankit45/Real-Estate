const express =require("express");
const authRoute=require("./routes/auth.route");
const postRoute=require("./routes/post.route");
const app= express();

app.use(express.json());


app.listen(8800,()=>{
    console.log("Server is running!");
});
app.use("/api/posts",postRoute);
app.use("/api/auth",authRoute);


