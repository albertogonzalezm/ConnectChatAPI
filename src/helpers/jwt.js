import { config } from "dotenv";
config()
import { sign, verify } from "jsonwebtoken";

const secretKey = process.env.SECRET_KEY;
export const genToken = (payload) => {
    return sign({
        id: payload.id,
        role: payload.role
    }, secretKey, {
        expiresIn: '1h'
    })
}

export const verifyToken = (token) => {
    try {
        return verify(token, secretKey);
    } catch (error) {
        return null
    }
}