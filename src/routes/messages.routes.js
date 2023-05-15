import { Router } from "express";
import { newMessage } from "../controllers/message.controller.js";

const router = Router();

router.post('/new', newMessage);

export default router;