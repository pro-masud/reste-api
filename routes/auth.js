import express from "express";

import { 
    loginUser,
    logoutUser
 } from "../controllers/authController.js";

// init router
const router = express.Router();
  
//create rou/api/v1ter
router.post("/login", loginUser);
router.get("/logout", logoutUser);


//export router
export default router;   