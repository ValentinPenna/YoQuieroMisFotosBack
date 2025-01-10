import {Router} from "express";
import projectsRoute from "./projectsRoute";

const router = Router();

router.use("/projects", projectsRoute);

export default router;