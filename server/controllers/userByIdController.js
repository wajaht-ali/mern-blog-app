import UserModel from "../models/UserModel.js";

export const getUserById = async (req, res) => {
    const id = req.params.id;
    UserModel.findById({ _id: id })
        .then((user) => {
            res.json(user);
        })
        .catch((error) => {
            res.json(error);
        })
}