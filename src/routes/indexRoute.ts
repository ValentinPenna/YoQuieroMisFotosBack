import {Router} from "express";
import usersRoute from "./usersRoute";
import ordersRoute from "./ordersRoute";
import productsRoute from "./productsRoute";

const router = Router();

router.use("/users", usersRoute);
router.use("/orders", ordersRoute);
router.use("/products", productsRoute)

export default router;