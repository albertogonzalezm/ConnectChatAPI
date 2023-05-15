import { reverse } from "dns";
import MessageSchema from "../models/messages.js";

// 64626fedb79fd64e1a432eda
// 6462739c6408ca0fbd4ab55a

export const newMessage = async (req, res) => {
    try {
        const send = '6462739c6408ca0fbd4ab55a';
        const receive = 'h';
        const message = 'muy bien'
        const chat = await MessageSchema.find({ usersId: send && receive })

        // const msg = await new MessageSchema({ message: [{ send, receive, message }], usersId: [send, receive] }).save()

        res.send(msg)
    } catch (error) {
        return res.json({ error })
    }
}