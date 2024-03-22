import UserModel from "../models/UserModel.js";

export const updateUserById = async (req, res) => {
    const id = req.params.id;
    const { name, email, role } = req.body;
    UserModel.findByIdAndUpdate({ _id: id }, { name, email, role })
        .then((res) => {
            res.json("Success");
        })
        .catch((error) => {
            res.json(error);
        })

}