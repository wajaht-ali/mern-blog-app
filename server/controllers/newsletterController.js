import newsletterModel from "../models/newsletter.js";
export const newsLetterController = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
        return res.status(201).send({
            success: true,
            message: "Please enter your email before submission."
        })
    }
    //emailValidation
    const emailValidation = await newsletterModel.findOne({ email: email });
    if (emailValidation) {
      return res.status(201).send({
        success: true,
        message: "You have already suscribed! Thank You.",
      });
    }
    const member = await new newsletterModel({ email }).save();
    return res.status(200).send({
      success: true,
      message: "Thank you for subscribing!",
      member,
    });
  } catch (error) {
    console.log(`Error with newsletter ${error}`);
  }
};
