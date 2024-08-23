import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import cors from "cors";

import wordRoute from "./routes/words.js";
import userRoute from "./routes/users.js";

const app = express();

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const corsOptions = {
  origin: "*",
  credentials: true,
};
app.use(cors(corsOptions));

app.use("/words", wordRoute);
app.use("/users", userRoute);

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({ error: { message: error.message } });
});

export default app;
