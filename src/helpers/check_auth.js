import { verifyToken } from './jwt.js';

export const checkAuth = async (authorization) => {
    try {
        const tokenData = await verifyToken(authorization.split(' ').pop());
        return tokenData ? tokenData : null;
    } catch (error) {
        return error;
    }
}
export const checkRole = (roles) => async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ').pop();
        const tokenData = await verifyToken(token);
        if ([].concat(roles).includes(tokenData.role)) {
            next()
        } else {
            return res.status(403).json({ message: 'Forbidden' })
        }
    } catch (error) {
        return res.status(401).json({ message: 'Unauthorized' })
    }
}