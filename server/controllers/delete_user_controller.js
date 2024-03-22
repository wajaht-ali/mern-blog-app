import UserModel from "../models/UserModel.js";

export const DeleteUserController = async (req, res) => {
    const id = req.params.id;
    await UserModel.findByIdAndDelete({_id: id})
        .then((res) => {
            res.json("Success");
        })
        .catch((error) => {
            res.json(error);
        })
}