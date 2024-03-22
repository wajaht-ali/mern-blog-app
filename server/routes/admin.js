import express from "express";
import AdminUsersController from "../controllers/admin_Users_Controller.js";
import { DeleteUserController } from "../controllers/delete_user_controller.js";
import { getUserById } from "../controllers/userByIdController.js";
import { updateUserById } from "../controllers/updateUser.js";

const router = express.Router();

router.get("/getAllUsers", AdminUsersController)
router.get("/getUserById/:id", getUserById)
router.put("/updateUserById/:id", updateUserById)
router.delete("/deleteUser/:id", DeleteUserController)

export { router as AdminRouter };