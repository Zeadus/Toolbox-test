import * as express from "express";
import filesController from "../controllers/files/index.js";

const router = express.Router();

/**
 * Returns the list of .csv files
 *
 */

router.get("/list", filesController.getFileList);

/**
 * Returns the data of all the valid .csv files,
 * A filename query param can be passed to get the specific file's formatted data
 */

router.get("/data", filesController.getFilesData);

export default router;
