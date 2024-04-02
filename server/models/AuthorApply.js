import mongoose from "mongoose";

const AuthorApplySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    facebook: {
      type: String,
      require: true,
    },
    twitter: {
      type: String,
      require: true,
    },
    checkbox: {
      type: Boolean,
      require: true,
    },
  },
  { timestamps: true }
);

const AuthorApplyModel = mongoose.model("applications", AuthorApplySchema);

export default AuthorApplyModel;
