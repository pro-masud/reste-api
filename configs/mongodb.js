import mongoose from "mongoose";

export const mongodbconnection = async (req, res) =>{
    const connect = await mongoose.connect(process.env.MONGO_URL);
   
    try {
        console.log(`MongoDB Connection successful`.bgBlue.black);
    } catch (error) {
        console.log(`Mongo DB Connection failed ${error.message}`.bgRed.black);
    } 

};