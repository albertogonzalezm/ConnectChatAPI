import { Schema, model } from "mongoose";

const messageSchema = new Schema({
    message: [{
        sender: {
            type: String,
            required: true
        },
        receiver: {
            type: String,
            require: true
        },
        message: {
            type: String,
            require: true
        },
        time: {
            type: Date,
            default: Date.now()
        }
    }],
    usersId: [String]
}, {
    timestamps: false,
    versionKey: false,
});

export default model('messages', messageSchema)