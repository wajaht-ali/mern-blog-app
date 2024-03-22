import express from "express";
import UserModel from "../models/UserModel.js";

const AdminUsersController = (req, res) => {
    UserModel.find({})
        .then((users) => {
            res.json(users);
        })
        .catch((error) => {
            res.json(error);
        })
}

export default AdminUsersController;