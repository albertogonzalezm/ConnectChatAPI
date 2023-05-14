import { config } from "dotenv";
config()
import jwt from "jsonwebtoken";

const secretKey = process.env.SECRET_KEY;
export const genToken = (payload) => {
    return jwt.sign({
        id: payload.id,
        role: payload.role
    }, secretKey, {
        expiresIn: '1h'
    })
}

export const verifyToken = (token) => {
    try {
        return jwt.verify(token, secretKey);
    } catch (error) {
        return null
    }
}