import PostModel from "../models/PostModel.js";

export const GetPostById = async (req, res) => {
    const id = req.params.id;
    PostModel.findById({ _id: id })
        .then((post) => {
            res.json(post);
        })
        .catch((error) => {
            res.json(error);
        })
}