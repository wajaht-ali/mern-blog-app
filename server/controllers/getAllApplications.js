import AuthorApplyModel from "../models/AuthorApply.js";

export const getAllApplications = async (req, res) => {
  try {
    const applications = await AuthorApplyModel.find({});
    return res.status(200).send({
      success: true,
      message: "got all applications",
      applications,
    });
  } catch (error) {
    console.log(`Error with applicatins ${error}`);
  }
};
