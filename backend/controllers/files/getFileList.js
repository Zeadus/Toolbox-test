import { z } from "zod";
import validateRequest from "../../helpers/validateRequest.js";
import fileService from "../../services/files/index.js";

const requestSchema = z.object({
  fileName: z.optional(z.string().min(1).max(20)),
});

const getFileList = async (req, res) => {
  try {
    const { fileName } = req.query;
    await validateRequest(requestSchema, { fileName });
    const files = await fileService.getFileList(fileName);
    return res.status(200).json(files);
  } catch (err) {
    const { status, message, error } = err;
    return res.status(status).json({ status, message, error });
  }
};

export default getFileList;
