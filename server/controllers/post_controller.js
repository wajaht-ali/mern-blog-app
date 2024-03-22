import PostModel from "../models/PostModel.js";

const AllPosts = async (req, res) => {
    PostModel.find()
        .then((response) => {
            res.json(response);
        })
        .catch((error) => {
            res.json(error)
        })
}

export default AllPosts;