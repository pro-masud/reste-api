import express from "express";

import { 
    createleUser,
    getAllUser,
    getSingleUser,
    DELETEUser,
    UpdateUser
 } from "../controllers/userController.js";
import { verifyToken } from "../middlewares/verifyToken.js";

// init router
const router = express.Router();

// verify Token
router.use(verifyToken);
 
//create router
router.post("/", createleUser);
router.get("/", getAllUser);
router.get("/:id", getSingleUser);
router.delete("/:id", DELETEUser);
router.patch("/:id", UpdateUser);
 

//export router
export default router;   