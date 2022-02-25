// imports
const express = require("express");
const router = express.Router();
const words = require("../controllers/words");

// routes
router
  .get("/", words.getWords)
  .post("/", words.addWords)
  .put("/:id", words.editWords)
  .delete("/:id", words.removeWords);

module.exports = router;
