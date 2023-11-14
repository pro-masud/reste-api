import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import { mongodbconnection } from "./configs/mongodb.js";
import userRouter from "./routes/user.js";
import { errorHandler }  from "./middlewares/errorHandler.js";
import authRouter from "./routes/auth.js";
import cookieParser from "cookie-parser";
import teamRouter from "./routes/team.js";
import bookRouter from "./routes/book.js";

// inittialize var
dotenv.config();
const PORT = process.env.PORT || 6060;

 
// use express middleware
const app = express();
app.use(express.json());
app.use(cookieParser())
  
// ejs 
app.set("view engine", "ejs");


//static folder 
app.use(express.static("public"));

//router
app.use("/api/v1/user", userRouter);
app.use("/api/v1", authRouter);
app.use("/api/v1", teamRouter);
app.use("/api/v1", bookRouter);



// error handler
app.use(errorHandler);

//listen port
app.listen(PORT , () =>{
    mongodbconnection();
    console.log(`Server is running on Port${PORT}`.bgGreen.white);
});   