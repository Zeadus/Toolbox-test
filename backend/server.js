/* eslint-disable no-console */
import express from "express";

import routes from "./routes/index.js";

import cors from "cors";

const app = express();

app.use(cors());

app.use("/", routes);

app.listen(3001, () => {
  console.log("Express App Listening on Port 3001");
});
export default app;
