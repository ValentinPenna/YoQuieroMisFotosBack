import express from "express";
import { usersController } from "../controllers/usersController";
import { checkRegister } from "../middlewares/checkRegister";
import { authMiddleware } from "../middlewares/authMiddleware";

const router = express.Router();

router.get("/", authMiddleware, usersController.getUsers)
router.get("/:id", authMiddleware, usersController.getUserById)
router.post("/register", checkRegister, usersController.postUser)
router.post("/login", usersController.loginUser)
router.put("/:id", authMiddleware, usersController.putUser)
router.delete("/:id", authMiddleware, usersController.deleteUser)

export default router