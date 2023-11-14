import User from "../models/User.js"
 import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import asynchandler from "express-async-handler";
/**
 * @DESC Create USER
 * @ROUTE USER
 * @METHOD GET
 * @ACCESS PUBLIC
 */
  
 
export const createleUser = asynchandler(async (req, res) =>{
    
    //get params
    const {name, email, password} = req.body;

    // validation Data
    if(!name || !email || !password){
        return res.status(400).json({message : "All fields are required"});
    }

      // password hash
      const hashPass = await bcrypt.hash(password, 10);

    // user create
    const data = await User.create({ 
        name, email, password : hashPass,


         $push : {books : ["654f19040bf26d3715c09c17","65539548d661f3e6cfea92d8", "6553955bd661f3e6cfea92da", "6553956dd661f3e6cfea92dc"]},

         $push : {team : "65539583d661f3e6cfea92de"},

    }); 
    
    // create jwt
    const token = jwt.sign({name, email}, process.env.JWT_SECRET, {expiresIn : "10"});

    res.status(200).json({message : "User create successful", user : data, token :  token});

});
   






 /**
 * @DESC GET ALL USER
 * @ROUTE USER
 * @METHOD GET
 * @ACCESS PUBLIC
 */
 


 
export const getAllUser = asynchandler(async (req, res) =>{
    
    const data = await User.find();
    
    //check user count 
    if(!data){
        return res.status(400).json({message : 'User data not found', user : data});
    }

    res.status(200).json({message : '', user : data});

});

/**
 * @DESC GET ALL USER
 * @ROUTE USER
 * @METHOD GET
 * @ACCESS PUBLIC
 */
 
 
export const getSingleUser = asynchandler( async (req, res) =>{
    
    //get params
    const {id} = req.params;

    const data = await User.findById(id);
    
    //check user count
  
    if(!data){
        return res.status(400).json({message : 'User data not found', user : data});
    }

    res.status(200).json({message : '', user : data});

});




/**
 * @DESC GET ALL USER
 * @ROUTE USER
 * @METHOD DELETE
 * @ACCESS PUBLIC
 */
 
 
   export const DELETEUser = asynchandler(async (req, res) =>{
    
    //get params
    const {id} = req.params;

    const data = await User.findByIdAndDelete(id);
    
    //check user count
  
    if(!data){
        return res.status(400).json({message : 'User data not found', user : data});
    }

    res.status(200).json({message : 'Data deleted successful', user : data});

});

/**
 * @DESC GET ALL USER
 * @ROUTE USER
 * @METHOD put/patch
 * @ACCESS PUBLIC
 */
 
 
export const UpdateUser = asynchandler(async (req, res) =>{
    
    //get params
    const {id} = req.params;
const {name, email} = req.body;

     // validation Data
     if(!name || !email){
        return res.status(400).json({message : "All fields are required"});
    }

    const data = await User.findByIdAndUpdate(id,{
        name, email
    },{new : true,});


    res.status(200).json({message : 'Data Updated successful', user : data});

});
