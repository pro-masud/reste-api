import express from "express";
import { BookTeam } from "../controllers/bookController.js";
import { verifyToken } from "../middlewares/verifyToken.js";

// express router
const router = express.Router();

// verify token
// router.use(verifyToken)

// router
router.post("/book", BookTeam);

// default export
export default router;