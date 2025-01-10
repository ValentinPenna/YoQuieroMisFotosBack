import express from "express";
import { usersController } from "../controllers/usersController";
import { checkRegister } from "../middlewares/checkRegister";

const router = express.Router();

router.get("/", usersController.getUsers)
router.get("/:id", usersController.getUserById)
router.post("/register", checkRegister, usersController.postUser)
router.post("/login", usersController.loginUser)
router.put("/:id", usersController.putUser)
router.delete("/:id", usersController.deleteUser)

export default router