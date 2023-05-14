import UserSchema from '../models/users.js'
import { genToken } from '../helpers/jwt.js'

export const signup = async (req, res) => {
    try {
        const { username, password, confirmpassword } = req.body
        if (password !== confirmpassword) {
            return res.status(400).json({ message: 'Passwords do not match' })
        }
        await UserSchema.create({ username, password })
        return res.status(201).json({ message: 'User has been created' })
    } catch (error) {
        return res.json(error)
    }
};

export const login = async (req, res) => {
    try {
        const { username, password } = req.body
        const user = await UserSchema.findOne({
            where: { username, password },
            attributes: ['id', 'username', 'password', 'role']
        })
        if (user) {
            const tokenSession = genToken(user)
            return res.json({ user, tokenSession })
        } else {
            return res.json('No matches found')
        }
    } catch (error) {
        return res.json(null)
    }
}