import express from "express";

const router = express.Router();

router.post("/score", (req, res, next) => {
  const score = {
    userId: req.body.userId,
    wordCount: req.body.wordCount,
    time: req.body.time,
  };
  res.status(201).json({
    message: "Score was recorded",
    score: score,
  });
});

export default router;
