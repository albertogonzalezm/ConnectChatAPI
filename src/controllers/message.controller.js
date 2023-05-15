import MessageSchema from "../models/messages.js";

// 64626fedb79fd64e1a432eda
// 6462739c6408ca0fbd4ab55a

export const newMessage = async (req, res) => {
    try {
        const send = '64626fedb79fd64e1a432eda';
        const receive = '6462739c6408ca0fbd4ab55a';
        const message = 'hola mundo'
        const msg = await new MessageSchema({ message: [{ send, receive, message }] }).save()
        res.send(msg)
    } catch (error) {
        return res.json(null)
    }
}