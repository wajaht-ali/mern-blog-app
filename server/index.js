import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { UserRouter } from "./routes/user.js";
import { PostRouter } from "./routes/posts.js";
import { AdminRouter } from "./routes/admin.js";
import { ApplyRouter } from "./routes/apply.js";
import { requireSignIn } from "./middlewares/requireSignIn.js";
import { chatRouter } from "./routes/chat.js";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const db_URI = process.env.db_URI;

app.use(
  cors({
    origin: ["*"],
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(express.static("assets"));

mongoose.connect(db_URI);

app.use("/api/auth", UserRouter);
app.use("/api/posts", PostRouter);
app.use("/api/apply", requireSignIn, ApplyRouter);
app.use("/api/admin", AdminRouter);
app.use("/api/chat", chatRouter);

app.listen(PORT, (req, res) => {
  console.log(`Server is running on ${PORT}`);
});
