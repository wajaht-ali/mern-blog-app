import AuthorApplyModel from "../models/AuthorApply.js";

export const getApplicationById = async (req, res) => {
  try {
    const id = req.params.id;
    const app = await AuthorApplyModel.findById({ _id: id });
    return res.status(200).send({
      success: true,
      message: "find successfully",
      app,
    });
  } catch (error) {
    console.log(`Error with app id ${error}`);
  }
};
