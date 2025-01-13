import express from "express";
import { ordersController } from "../controllers/ordersController";
import { checkRegister } from "../middlewares/checkRegister";

const router = express.Router();

router.get("/", ordersController.getOrders)
router.get("/:id", ordersController.getOrderById)
router.post("/", ordersController.postOrder)
router.put("/:id", ordersController.putOrder)
router.delete("/:id", ordersController.deleteOrder)

export default router