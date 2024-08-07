import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import cookieParser from "cookie-parser";
import { UserRouter } from "./routes/user.js";
import { PostRouter } from "./routes/posts.js";
import { AdminRouter } from "./routes/admin.js";
import { ApplyRouter } from "./routes/apply.js";
import { requireSignIn } from "./middlewares/requireSignIn.js";
import { chatRouter } from "./routes/chat.js";
import connectDB from "./config/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const db_URI = process.env.db_URI;

app.use(
  cors({
    origin: ["https://mern-blog-app-ui.vercel.app"],
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(express.static("assets"));

// mongoose.connect(db_URI);
connectDB();

// -----------Deployment section ---------------
// app.use(express.static("./client/dist"));
// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
// });
// -----------Deployment section ---------------

app.use("/api/auth", UserRouter);
app.use("/api/posts", PostRouter);
app.use("/api/apply", requireSignIn, ApplyRouter);
app.use("/api/admin", AdminRouter);
app.use("/api/chat", chatRouter);

//testing route
app.get("/", (req, res) => {
  res.send("Code deployed successfully!");
});

app.listen(PORT, (req, res) => {
  console.log(`Server is running on ${PORT}`);
});

module.exports = app;