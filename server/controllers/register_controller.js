import bcrypt from "bcrypt";
import UserModel from "../models/UserModel.js";

// const screte_KEY = process.env.screte_KEY;

const RegisterController = async (req, res) => {
    const { name, email, password } = req.body;
    await UserModel.findOne({ email: email })
        .then(async (user) => {
            if (user) {
                res.json("Email already registered, Try another one.");
            }
            else {
                const hash = await bcrypt.hash(password, 10);
                UserModel.create({
                    name: name,
                    email: email,
                    password: hash
                })
                    .then((response) => {
                        res.json("Success");
                    })
                    .catch((error) => {
                        res.json(error);
                    })
            }
        })
        .catch((error) => {
            res.json(error);
        })
}

export default RegisterController;