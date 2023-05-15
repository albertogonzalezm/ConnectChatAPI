import { Schema, model } from "mongoose";

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: 'user'
    }
}, {
    timestamps: true,
    versionKey: false
});

export default model('users', userSchema);