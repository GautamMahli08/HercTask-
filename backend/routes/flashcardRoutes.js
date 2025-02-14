const express = require("express");
const Flashcard = require("../models/Flashcard");
const router = express.Router();
const jwt = require("jsonwebtoken");

// Middleware to verify JWT token
const authenticate = (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");
  if (!token) return res.status(401).json({ error: "Access denied" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (err) {
    res.status(401).json({ error: "Invalid token" });
  }
};

// Add a new flashcard
router.post("/flashcards", authenticate, async (req, res) => {
  const { question, answer } = req.body;
  try {
    const newFlashcard = new Flashcard({ question, answer, user: req.userId });
    await newFlashcard.save();
    res.status(201).json(newFlashcard);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all flashcards for the logged-in user
router.get("/flashcards", authenticate, async (req, res) => {
  try {
    const flashcards = await Flashcard.find({ user: req.userId });
    res.status(200).json(flashcards);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update a flashcard
router.put("/flashcards/:id", authenticate, async (req, res) => {
  const { id } = req.params;
  const { isCorrect } = req.body;
  try {
    const flashcard = await Flashcard.findOne({ _id: id, user: req.userId });
    if (!flashcard) return res.status(404).json({ error: "Flashcard not found" });

    if (isCorrect) {
      flashcard.box = Math.min(flashcard.box + 1, 5);
    } else {
      flashcard.box = 1;
    }

    const daysToAdd = Math.pow(2, flashcard.box - 1);
    flashcard.nextReviewDate = new Date(Date.now() + daysToAdd * 24 * 60 * 60 * 1000);

    await flashcard.save();
    res.status(200).json(flashcard);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete a flashcard
router.delete("/flashcards/:id", authenticate, async (req, res) => {
  const { id } = req.params;
  try {
    await Flashcard.findOneAndDelete({ _id: id, user: req.userId });
    res.status(200).json({ message: "Flashcard deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;