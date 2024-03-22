import UserModel from "../models/UserModel.js";

export const GetAllUsers = async (req, res) => {
    UserModel.find()
        .then((users) => {
            res.json(users);
        })
        .catch((error) => {
            res.json(error);
        })
}