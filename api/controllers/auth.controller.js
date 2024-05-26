const bcrypt=require("bcrypt");
const prisma=require("../library/prisma");

const register = async (req,res)=>{
    const {username,email,password}=req.body;
  
    try{
        //HASH THE PASSWORD
    
    const hashedPassword = await bcrypt.hash(password,10);

    //CREATE A NEW USER AND ADD IT TO LIBRARY

    const newUser = await prisma.user.create({
        data:{
            username,
            email,
            password:hashedPassword,
        },
    });

    console.log(newUser);
    res.status(201).json({message:"User created successfully"});
    }
   catch(err){
     console.log(err);
     res.status(500).json({message:"failed to create user"});
   }
};

const login =  async (req,res)=>{
    const {username,password}=req.body;
try{


    //check if user exists

const user =await prisma.user.findUnique({
    where:{username}

})
if(!user)return res.status(401).json({message:"invalid credentials"});

    //check if the password is correct 

const isPasswordValid=await bcrypt.compare(password,user.password);


if(!isPasswordValid)return res.status(401).json({message:"invalid credentials"});

    //generate cookie token and send to the user

    res.setHeader("Set-Cookie","test="+"myValue").json("success")
}
catch(err){
    console.log(err);
     res.status(500).json({message:"failed to login"});
}

};

const logout = (req,res)=>{
    
};
module.exports={register,login,logout};