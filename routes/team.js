import express from "express";
import { CreateTeam } from "../controllers/teamController.js";
import { verifyToken } from "../middlewares/verifyToken.js";

// express router
const router = express.Router();

// verify token
// router.use(verifyToken)

// router
router.post("/team", CreateTeam);

// default export
export default router;  