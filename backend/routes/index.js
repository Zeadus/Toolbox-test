import * as express from "express";
import filesRoutes from "./files.js";

const router = express.Router();

router.use("/files", filesRoutes);

export default router;
