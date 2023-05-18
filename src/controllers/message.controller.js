import MessageSchema from "../models/messages.js";
import userSchema from "../models/users.js";
import { checkAuth } from "../helpers/check_auth.js";

// 64626fedb79fd64e1a432eda
// 6462739c6408ca0fbd4ab55a

export const newMessage = async (req, res) => {
    try {
        const tokenData = await checkAuth(req.headers.authorization);
        const senderId = tokenData.id;
        const receiver = await userSchema.findOne({ username: req.params.receiver }, { id: true });
        const receiverId = receiver.id;
        const message = req.body.message;

        const x = await MessageSchema.findOneAndUpdate({ usersId: [senderId, receiverId] }, {
            $push: {
                message: {
                    sender: senderId,
                    receiver: receiverId,
                    message
                }
            }
        });

        if (!x) {
            await new MessageSchema({
                message: {
                    sender: senderId,
                    receiver: receiverId,
                    message
                },
                usersId: [senderId, receiverId]
            }).save();
        }

        res.status(200).send({ done: 'Mensaje enviado' });
    } catch (error) {
        res.status(400).json({ error: 'Server error' });
    }
}

export const loadMessages = async (req, res) => {
    try {
        const token = await checkAuth(req.headers.authorization);
        const senderId = token.id;
        const receiverId = req.params.receiverId;

        const messagesLoaded = await MessageSchema.findOne({ usersId: [senderId, receiverId] });

        res.status(200).send(messagesLoaded);
    } catch (error) {
        res.json(404).json({ error: 'Not found' });
    }
}