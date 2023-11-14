import User from "../models/User.js";
import bcrypt from "bcrypt";
import  Jwt  from "jsonwebtoken";
import asynchandler from "express-async-handler";

/**
 * @DESC GET ALL USER
 * @ROUTE USER
 * @METHOD GET
 * @ACCESS PUBLIC
 */
  
 
export const loginUser = asynchandler(async (req, res) =>{
    
    const {email, password} = req.body;

    //validation
    if(!email || !password){
        return res.status(400).json({message : "All field are required"});
    };

    // user check
    const loginUser = await User.findOne({email});

    if(!loginUser){
        return res.status(404).json({message : "Invalid Email Address"});
    } 

    // password  check

    const passCheck = await bcrypt.compare(password, loginUser.password);

    if(!passCheck){
        return res.status(400).json({message : "Wrong Password "});
    }
    
    // access token
    const accessToken = Jwt.sign({email : loginUser.email}, process.env.JWT_SECRET,{expiresIn : "7d",});

    // set token
    res.cookie("accessToken", accessToken,{
        httpOnly : true,
        secure : process.env.APP_ENV === "Development" ? false : true,
        sameSite : "strict",
        path : "/",
        maxAge : 7 *24 * 60 *1000

    });

    res.status(200).json({message : ` Hello ${loginUser.name}, You are now logged In`, user : loginUser,accessToken});

    

}); 
   
   

/**
 * @DESC GET ALL USER
 * @ROUTE USER
 * @METHOD GET
 * @ACCESS PUBLIC
 */
  
 
export const logoutUser = asynchandler(async (req, res) =>{
    
    // clear auth cookie
    res.clearCookie("accessToken");
   

    res.status(200).json({message : ` You are now logout in`});

}); 
   
   