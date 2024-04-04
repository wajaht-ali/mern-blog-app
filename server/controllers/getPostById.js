import PostModel from "../models/PostModel.js";

export const GetPostById = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await PostModel.findById({ _id: id });
    res.status(201).send({
      success: true,
      message: "Get post successfully!",
      post,
    });
  } catch (error) {
    console.log(`Error with get post ${error}`);
    res.status(400).send({
      success: false,
      message: "Error with get post",
      error,
    });
  }
};

export const UpdatePostController = async (req, res) => {
  try {
    const { id } = req.params;
    // const {title, category, desc, creatorId, filename} = req.body;
    const post = await PostModel.findByIdAndUpdate(id, {
      title: req.body.title,
      category: req.body.category,
      desc: req.body.desc,
      createdBy: req.body.creatorId,
      file: req.file.filename,
    }, {new: true});
    res.status(201).send({
      success: true,
      message: "Post updated successfully",
      post,
    });
  } catch (error) {
    console.log(`Error with update post ${error}`);
    res.status(400).send({
      success: true,
      message: "Can not update post by Id",
    });
  }
};
