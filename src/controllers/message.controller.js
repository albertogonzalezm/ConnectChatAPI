import MessageSchema from "../models/messages";

export const newMessage = async (req, res) => {
    try {
        const { from, msg, time, to } = req.body
        // await MessageSchema.create({ message: [{ from, msg, time, to }] })
        return res.json({ from, msg, time, to })
    } catch (error) {
        return res.json(null)
    }
}