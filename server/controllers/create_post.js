import PostModel from "../models/PostModel.js"

export const CreatePostController = (req, res) => {

    PostModel.create({
        title: req.body.title,
        category: req.body.category,
        desc: req.body.desc,
        createdBy: req.body.creatorId,
        file: req.file.filename
    })
        .then((res) => {
            res.josn("Success");
        })
        .catch((error) => {
            res.json(error);
        })
}