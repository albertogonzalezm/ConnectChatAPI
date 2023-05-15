import UserSchema from "../models/users.js";

export const getusers = async (req, res) => {
    const users = await UserSchema.find();
    res.send(users)
}

export const findUserById = async (req, res) => {
    const { id } = req.params
    const user = await UserSchema.findById(id)
    res.json(user)
}