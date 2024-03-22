import PostModel from "../models/PostModel.js"

export const deletePostById = async (req, res) => {
    const { id } = req.params;
    await PostModel.findByIdAndDelete({ _id: id })
        .then((response) => {
            res.json("Deleted")
        })
        .catch((error) => {
            res.json(error);
        })
}