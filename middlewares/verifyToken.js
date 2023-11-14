import JWT from 'jsonwebtoken'
import asynncHandler from "express-async-handler";
export const verifyToken = (req, res, next) =>{

    // check cookies
     const {accessToken} = req.cookies;


      // check token
      if(!accessToken){
        return res.status(401).json({message : "Unauthorized"})
      }

      // verify token
     JWT.verify(accessToken, process.env.JWT_SECRET, asynncHandler( async(error, decode) =>{

        if(!error){
          res.status(400).json({message : "Invalid Token"});
        }

        next();

     }));


 

}