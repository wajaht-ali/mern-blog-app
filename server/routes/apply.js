import express from "express";
import { AuthorApplication } from "../controllers/applyAuthor.js";

const router = express.Router();

router.post('/', AuthorApplication);
export {router as ApplyRouter};