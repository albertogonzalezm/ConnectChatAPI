import { Schema, model } from "mongoose";

const messageSchema = new Schema({
    message: [{
        send: {
            type: String,
            required: true
        },
        receive: {
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
    }]
}, {
    timestamps: false,
    versionKey: false
});

export default model('messages', messageSchema)