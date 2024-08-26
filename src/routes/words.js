import express from "express";
import { randomWords, languages } from "../services/words.js";
const router = express.Router();

router.get("/languages", (req, res, next) => {
  res.status(200).json({ message: "Succesful", languages: languages });
});

router.get("/", (req, res, next) => {
  let result;
  if (req.query.testMode && req.query.wordCount) {
    result = randomWords(req.query.testMode, req.query.wordCount);
    res
      .status(200)
      .json({ message: "Successfully random words", words: result });
  } else if (req.query.testMode) {
    result = randomWords(req.query.testMode, 100);
    res
      .status(200)
      .json({ message: "Successfully random words", words: result });
  } else {
    res.status(400).json({ message: "Missing some parameters" });
  }
});
export default router;
