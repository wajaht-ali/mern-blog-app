import express from "express";
import multer from "multer";
import path from "path";
import AllPosts from "../controllers/post_controller.js";
import { CreatePostController } from "../controllers/create_post.js";
import { GetPostById } from "../controllers/getPostById.js";
import { deletePostById } from "../controllers/deletePost.js";
import { isSignedIn } from "../middlewares/requireSignIn.js";

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "assets/Images");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
});

router.get("/latest/:id", isSignedIn, GetPostById);
router.get("/getAllNews", AllPosts);
router.post("/createPost", upload.single("file"), CreatePostController);
router.delete("/deletePostById/:id", deletePostById);

export { router as PostRouter };
