import { Router } from "express";
import { newMessage, loadMessages } from "../controllers/message.controller.js";

const router = Router();

router.get('/loadmessages', loadMessages)
router.post('/new/:receiver', newMessage);

export default router;