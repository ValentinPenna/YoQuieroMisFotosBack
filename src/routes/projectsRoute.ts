import express from "express";
import { usersController } from "../controllers/usersController";

const router = express.Router();

router.get("/", usersController.getUsers)
router.get("/:id", usersController.getUserById)
router.post("/", usersController.postUser)
router.put("/:id", usersController.putUser)
router.delete("/:id", usersController.deleteUser)

export default router