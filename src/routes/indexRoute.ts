import {Router} from "express";
import usersRoute from "./usersRoute";
import ordersRoute from "./ordersRoute";

const router = Router();

router.use("/users", usersRoute);
router.use("/orders", ordersRoute);

export default router;