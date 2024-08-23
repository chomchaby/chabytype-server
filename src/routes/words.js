import express from "express";
import { randomWords } from "../services/words.js";
const router = express.Router();

router.get("/", (req, res, next) => {
  let result;
  if (req.query.testMode && req.query.wordCount) {
    result = randomWords(req.query.testMode, req.query.wordCount);
    res
      .status(200)
      .json({ message: "Successfully random words", words: result });
  } else {
    res.status(400).json({ message: "Missing some parameters" });
  }
});
export default router;
