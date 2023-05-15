import { Router } from "express";
import { findUserById, getusers } from "../controllers/user.controller.js";

const router = Router()

router.get('/getusers', getusers)
router.get('/getuser/:id', findUserById)

export default router;