import MessageSchema from "../models/messages.js";

// 64626fedb79fd64e1a432eda
// 6462739c6408ca0fbd4ab55a

export const newMessage = async (req, res) => {
    const local = '6465604718807a8147d94466';
    const receive = '6465604f18807a8147d94468';
    // const message = req.body.message
    const message = 'hola usuario2'

    const x = await MessageSchema.findOneAndUpdate({ usersId: [local, receive] }, { $push: { message: { send: local, receive, message } } })

    if (!x) {
        await new MessageSchema({ message: { send: local, receive, message }, usersId: [local, receive] }).save()
    }

    res.status(200).send({ done: 'Mensaje enviado' });
}