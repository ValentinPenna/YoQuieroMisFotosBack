import express from "express";
import { productsController } from "../controllers/productsController";

const router = express.Router();

router.get("/", productsController.getProducts)
router.get("/:id", productsController.getProductById)
router.post("/", productsController.postProduct)
router.put("/:id", productsController.putProduct)
router.delete("/:id", productsController.deleteProduct)

export default router