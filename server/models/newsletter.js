import mongoose from "mongoose";

const newsletterSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

const newsletterModel = mongoose.model("newsletter", newsletterSchema);

export default newsletterModel;
