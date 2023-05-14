import { Router } from "express";
import { newMessage } from "../controllers/message.controller";

const router = Router()

router.post('/newmessage', newMessage)